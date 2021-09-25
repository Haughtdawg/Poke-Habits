import React, { useState } from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function AddTaskContainer(){

    const [taskName, setTaskName] = useState('');

    return(
        <div className="AddTaskContainer d-flex ">

            {/* Break out into its own class */}
            <span className="d-flex flex-fill justify-content-center">
                <Button onClick={()=>alert(taskName)}>
                    <FontAwesomeIcon icon={ faPlus } />
                </Button>
            </span>
            
            {/* Break out into its own class */}
            <span className="d-flex flex-fill justify-content-center">
                <Form>
                    <Form.Label>Add Task</Form.Label>
                    <Form.Control type="text" placeholder="Input task name here" onChange = {e => setTaskName(e.target.value)} value={taskName}></Form.Control>
                </Form>
            </span>
            
            {/* Break out into its own class */}
            <span className="d-flex flex-fill justify-content-center">
                <Button variant="danger">
                    <FontAwesomeIcon icon={ faTrash } />
                </Button>
            </span>
        </div>
    )
}