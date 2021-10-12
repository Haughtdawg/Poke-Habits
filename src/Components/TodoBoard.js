import React, { useState } from 'react';
import '../index.css';
import { AddTaskContainer } from './TodoBoardComponents/AddTaskContainer.js';
import { TaskTable } from './TodoBoardComponents/TaskTable.js';
import { PointsAggregate } from './TodoBoardComponents/PointsAggregate.js';
import { taskData } from '../Data/taskTableData.json';
import { points } from '../Data/PokePoints.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/*
    Inputs: <none>
    State variables: taskArray, addModal, newTaskName, nextID, newTaskPoints, jsonPoints
    Parents: TodoPage
    Children: AddTaskContainer, TaskTable, PointsAggregate
*/

export function TodoBoard(){
    const [taskArray, setTaskArray] = useState(taskData); // Array of Todo Objects
    const [addModal, setAddModal] = useState(false); // Boolean to control the add task modal
    const [newTaskName, setNewTaskName] = useState(''); // Title for the add task controlled text input
    // Remove nextId as a state when we create tasks from a database
    const [nextID, setNextID] = useState(4); // Id property for the next task to be created; increments upon creating a new task
    const [newTaskPoints, setNewTaskPoints] = useState(5); // pointAmt property for the next task to be created
    const [jsonPoints, setJsonPoints] = useState(points); // Points displayed in the PointsAggregate component
    
    // Function to toggle the tasklistitem checkboxes inside TaskTable
    const toggleCheckBox = (checkedID) =>{
        /*
            1. Create duplicate array to mutate
            2. Define testing function to pass to the findIndex method
            3. Execute the findIndex method to return the index of the clicked box based on its ID
            4. Set the appropriate object's isCompleted property to true and call the taskArray setState on the updated array
        */
        const checkedTaskArray = taskArray;
        const eterator = e => e.iD === checkedID;
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
        setJsonPoints(jsonPoints + taskArray.reduce( (prev,current) => prev + (current.isCompleted ? current.pointAmt : 0),0));

        // Filter out the tasks that have not been completed- this will be our new array of tasks to keep
        const keepArray = taskArray.filter(o => !o.isCompleted);
        setTaskArray(keepArray);        
    }

    // Function to add a new task to our task list
    const addTask = () => {
        /*
            User has confirmed they want to create this task
            1. Close modal
            2. Create new task object
            3. Create duplicate task array and add our new task object to it
            4. Set the task array to our updated array
            5. Clear the task name variable 
        */
        setAddModal(false);
        const newTaskItem = {iD: nextID , pointAmt: newTaskPoints , title: newTaskName, isComplete: false};
        setNextID(nextID+1);
        setNewTaskPoints(newTaskPoints+1); // For now we are incrementing points
        const nextTaskArray = taskArray; // Need to create a copy of taskArray to change because we can't directly mutate state variables
        nextTaskArray.unshift(newTaskItem);
        setTaskArray(nextTaskArray);
        setNewTaskName('');
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

            <h2>TODO</h2>
            <AddTaskContainer taskName = {newTaskName} setTaskName = {setNewTaskName} setShowModal = { setAddModal }/>
            <TaskTable taskArray = {taskArray} setTaskArray = {setTaskArray} toggler = {toggleCheckBox} />
            <PointsAggregate points = {jsonPoints} />
            <Button onClick={submitTasks}>Submit Tasks!</Button>
        </div>
    )
}