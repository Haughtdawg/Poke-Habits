import React, { useState, useEffect } from 'react';
import '../index.css';
import { AddTaskContainer } from './TodoBoardComponents/AddTaskContainer.js';
import { TaskTable } from './TodoBoardComponents/TaskTable.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*
    Inputs: jsonPoints, setJsonPoints
    State variables: taskArray, addModal, newTaskName, nextID, newTaskPoints, jsonPoints
    Parents: PokeToDo
    Children: AddTaskContainer, TaskTable, PointsAggregate
*/

export function ToDoPage({jsonPoints, setJsonPoints, eggs, setEggs, setWindow}){
    const [taskArray, setTaskArray] = useState([]); // Array of Todo Objects
    const [addModal, setAddModal] = useState(false); // Boolean to control the add task modal
    const [newTaskName, setNewTaskName] = useState(''); // Title for the add task controlled text input
    // Remove nextId as a state when we create tasks from a database
    const [nextID, setNextID] = useState(4); // Id property for the next task to be created; increments upon creating a new task
    //const [newTaskPoints, setNewTaskPoints] = useState(5); // pointAmt property for the next task to be created
    const [showEggAlert, setShowEggAlert] = useState(false);
    const [taskDifficulty, setTaskDifficulty] = useState(0);//  pointAmt property for the next task to be created

    // Need to figure out how to set this config...
    const mode = "dev";
    const url = mode === "dev" ? "http://localhost:5000/todos" : "";

    // Function to load the tasks from the server
    const getTasks = async () =>{
        const response = await fetch(url);
        const todos = await response.json();
        console.log(todos);
        setTaskArray(todos);
    };

    useEffect(() => {
        getTasks();
    },[])

    // Function to prevent the default behavior of the add task form component and open the add task dialog modal
    const openAddTaskDialogModal = (e) => {
        e.preventDefault();
        setAddModal(true);
    }

    // Function to accept the Egg Alert and go to Collection Page
    const acceptEggAlert = ()=>{
        setShowEggAlert(false);
        setWindow('collection');
    }
    
    // Function to toggle the tasklistitem checkboxes inside TaskTable
    const toggleCheckBox = (checkedID) =>{
        /*
            1. Create duplicate array to mutate
            2. Define testing function to pass to the findIndex method
            3. Execute the findIndex method to return the index of the clicked box based on its ID
            4. Set the appropriate object's isCompleted property to true and call the taskArray setState on the updated array
        */
        const checkedTaskArray = taskArray;
        const eterator = e => e.id === checkedID;
        const checkedIndex = checkedTaskArray.findIndex(eterator);
        checkedTaskArray[checkedIndex].isCompleted = true;
        setTaskArray(checkedTaskArray);
    }

    // Function to submit completed tasks (add points to total and clear completed tasks)
    const submitTasks= () =>{
        /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

            Use the reduce method to sum the tasks that have the isCompleted property == true
            Then add that value to jsonPoints and use the setState function to update its value 
        */ 
        const additionalPoints = taskArray.reduce( (prev,current) => prev + (current.isCompleted ? current.pointAmt : 0),0);
        setJsonPoints(jsonPoints + additionalPoints);

        // Reduce points remaining for each egg and reassess if it is hatchable
        
        const newEggs = eggs.map( egg => {
            const newPointsRemaining = egg.stepsToHatch - additionalPoints;
            const isHatchable = newPointsRemaining <= 0;
            if(isHatchable){
                setShowEggAlert(true);
            }
            return {id: egg.id, stepsToHatch: newPointsRemaining, name: egg.name, 
                    isHatchable: isHatchable, pokemonImage: egg.pokemonImage}
        } )
        setEggs(newEggs);

        // Filter out the tasks that have not been completed- this will be our new array of tasks to keep
        const keepArray = taskArray.filter(o => !o.isCompleted);
        setTaskArray(keepArray);        
    }

    // Function to add a new task to our task list
    const addTask = async () => {
        /*
            User has confirmed they want to create this task
            1. Close modal
            2. Create new task object
            3. Create duplicate task array and add our new task object to it
            4. Set the task array to our updated array
            5. Clear the task name variable 
        */
        setAddModal(false);
        const newTaskItem = {id: nextID , pointAmt: taskDifficulty , title: newTaskName, isComplete: false};
        setNextID(nextID+1);
        //setTaskDifficulty(taskDifficulty); // For now we are incrementing points
        const nextTaskArray = taskArray; // Need to create a copy of taskArray to change because we can't directly mutate state variables
        nextTaskArray.unshift(newTaskItem);
        setTaskArray(nextTaskArray);
        setNewTaskName(''); 
        try{
            const body = {title: newTaskName, pointAmt: taskDifficulty};
            const response = await fetch(url, {
                method : "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        }catch(err){
            console.error(err.message);
        }
    }

    return(
        <div>
            <Modal show={addModal} onHide= {() =>  setAddModal(false)}>
                <Modal.Header>
                    <Modal.Title>Adding Task</Modal.Title>
                </Modal.Header> 
                <Modal.Body> 
                    <p>
                        {'Are you sure you want to add the following: ' + '"' + newTaskName + '"?'}
                    </p>
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() =>  setAddModal(false)} >
                    Cancel
                    </Button>

                    <Button onClick={ addTask }> 
                    Confirm
                    </Button>
                </Modal.Footer>

            </Modal>
            <Alert show={showEggAlert} variant="success" onClose={() => {setShowEggAlert(false)}} dismissible>
                <Alert.Heading>One of your eggs is ready to hatch!</Alert.Heading>
                <p>
                Click below to go to your Collection Page and hatch it!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={acceptEggAlert} variant="outline-success">
                    Collection Page
                </Button>
                </div>
            </Alert>

            <Container className="my-5 border-bottom">
                <Row className="d-flex justify-content-center">
                        <h1 className="text-center">To Do Items</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col>
                        <h3 className="text-center">You currently have {jsonPoints} PokePoints!</h3>
                    </Col>
                </Row>
            </Container>
            <Container>
                <AddTaskContainer taskName = {newTaskName} setTaskName = {setNewTaskName} openAddTaskDialogModal = { openAddTaskDialogModal } setTaskDifficulty = { setTaskDifficulty }/>
                <TaskTable taskArray = {taskArray} setTaskArray = {setTaskArray} toggler = {toggleCheckBox} />
                <Row className="d-flex my-3 justify-content-center">
                    <Col xs={4} className="d-flex justify-content-center">
                        <Button size="lg" onClick={submitTasks}>Submit Tasks!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}