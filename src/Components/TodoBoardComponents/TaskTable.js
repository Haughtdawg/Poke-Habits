import React, { useState, useContext } from 'react';
import { TaskListItem } from './TaskListItem.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { MainURL } from '../../index.js';
/*
    Inputs: taskArray, setTaskArray, toggler
    State variables: taskIndex, removeModal
    Parents: ToDoPage
    Children: TaskListItem
*/

export function TaskTable( { taskArray, setTaskArray, toggler } ){
    /*
        taskArray: Array of task objects (state variable of ToDoPage)
        setTaskArray: setState function to update the taskArray
        toggler: Callback function to toggle the check boxes of TaskListItem on click
    */

    const [taskIndex, setTaskIndex] = useState(0); // Index of the task to be removed 
    const [taskID, setTaskID] = useState(0); //ID of the tasks to be removed from backend
    const [removeModal, setRemoveModal] = useState(false); // Boolean to control the removal confirmation modal

    const theURL = useContext(MainURL); //server URL dependent on dev mode

    // Function to open the modal and set the index of the selected task
    const openIt = (selectedKey) => {
        const testKey = (e) => e.id === selectedKey; // Testing function to be passed to findIndex
        setTaskID(selectedKey); //Sets ID of tasks to delete 
        setTaskIndex(taskArray.findIndex(testKey)); // Returns the index of the selected task and sets it to the taskIndex state
        setRemoveModal(true); // Open the modal
    }

    // Function to close the modal
    const closeIt = () => setRemoveModal(false); 

    // Function to delete a task once confirmed
    const deleteTask =  async () => {
        /*
            1. Close the modal
            2. Create copy of the task data
            3. Remove the task at taskIndex in the copied array
            4. Set the copied array as the new task data
        */
        try {
            setRemoveModal(false);
            const newTaskArray = taskArray; // Need to copy data because we can't directly mutate state variables
            newTaskArray.splice(taskIndex, 1); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
            setTaskIndex(0);
            setTaskArray(newTaskArray);
            const deleteTasks = await fetch(theURL + `todos/${taskID}`, {
                method: "DELETE"
            });
        } catch (err) {
            console.eror(err.message);            
        }
    }

    // Map each element of taskArray to a unique TaskListItem component
    const tableInfo = taskArray.map((e) => <TaskListItem 
                                            pointAmt= {e.pointAmt} 
                                            title= {e.title} 
                                            taskId= {e.id} 
                                            key= {e.id.toString()} 
                                            deletionConfirm = {openIt}
                                            checkBoxState = {e.isCompleted}
                                            toggler = {toggler}
                                            />);
    // tableInfo is now an array of TaskListItem components- comprises each row of the TaskTable

    return(  
        <div>
            <Modal show={removeModal} onHide= {closeIt}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header> 
                <Modal.Body> 
                    <p>
                        {'Are you sure you want to delete task: ' + '"' + (taskArray.length > 0 ? taskArray[taskIndex].title : '') + '"?'}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setRemoveModal(false)} >
                        Cancel
                    </Button>

                    <Button onClick={deleteTask} > 
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className="mt-5 border-bottom">
                <Col xs={4} className="d-flex justify-content-center">
                    <h3 className="mb-0">Point Value</h3>
                </Col>
                <Col xs={1}>
                </Col>
                <Col xs={6} className="d-flex justify-content-center">
                    <h3 className="mb-0">Task Title</h3>
                </Col>
                <Col xs={1}>
                </Col>
            </Row>
            <Container className="mt-2">
                <Stack gap={2}>
                    {tableInfo}
                </Stack>
            </Container>
        </div>
    )
}