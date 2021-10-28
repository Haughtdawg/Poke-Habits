import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack'
/*
    Inputs: taskName, setTaskName, setShowModal
    State variables: <none>
    Parents: TodoPage
    Children: <none>
*/
export function AddTaskContainer({ taskName, setTaskName, setShowModal }){
    /*
        taskName: String title for the new task (state variable for TodoPage)
        setTaskName: setState function to update the taskName
        setShowModal: setState function to bring up the add task confirmation modal
    */
    return(
        <Row className="my-3">
            <Stack direction="horizontal" gap={3}>
                <Form.Label className="text-nowrap fs-4">Add Task:</Form.Label>
                <Form.Control type="text" 
                            placeholder="Input task name here" 
                            onChange = {e => setTaskName(e.target.value)} 
                            value={taskName}>
                </Form.Control>
                <Button onClick={()=> setShowModal(true)}>
                    <FontAwesomeIcon icon={ faPlus } />
                </Button>
                <div className="vr" />
                <Button variant="danger" onClick= {()=>setTaskName('')} >
                    <FontAwesomeIcon icon={ faTrash } />
                </Button>
            </Stack>
        </Row>
    )
}