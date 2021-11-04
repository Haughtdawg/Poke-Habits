import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

/*
    Inputs: taskName, setTaskName, setShowModal, setTaskDifficulty
    State variables: <none>
    Parents: TodoPage
    Children: <none>
*/
export function AddTaskContainer({ taskName, setTaskName, setShowModal, setTaskDifficulty}){
    /*
        taskName: String title for the new task (state variable for TodoPage)
        setTaskName: setState function to update the taskName
        setShowModal: setState function to bring up the add task confirmation modal
        setTaskDifficulty: setState function to set a task's point's worth
    */
   
    return(
        <Row className="my-3">
            <Stack direction="horizontal" gap={3}>
                <Form.Label className="text-nowrap fs-4">Add Task:</Form.Label> {/*input field for a new user defined task*/}
                <Form.Control type="text" 
                            placeholder="Input task name here" 
                            onChange = {e => setTaskName(e.target.value)} 
                            value={taskName}>
                </Form.Control>
                <Form.Select aria-label="Default select example" onChange = {f => setTaskDifficulty(f.target.value)}> {/*dropdown field for user defined task Difficulty*/}
                    <option>Difficulty</option>
                    <option value = {50} >Trivial</option>
                    <option value = {100}>Easy</option>
                    <option value = {150}>Medium</option>
                    <option value = {200}>Hard</option>
                </Form.Select>

                <Button onClick={()=> setShowModal(true)}> {/* Button to create new task */}
                    <FontAwesomeIcon icon={ faPlus } />
                </Button>
                <div className="vr" />
                <Button variant="danger" onClick= {()=>setTaskName('')} > {/* Clear input field button */}
                    <FontAwesomeIcon icon={ faTrash } />
                </Button>
            </Stack>
        </Row>
    )
}