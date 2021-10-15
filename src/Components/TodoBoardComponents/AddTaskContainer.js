import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <div className="AddTaskContainer d-flex ">

            {/* Break out into its own class */}
            <span className="d-flex flex-fill justify-content-center">
                <Button onClick={()=> setShowModal(true)}>
                    <FontAwesomeIcon icon={ faPlus } />
                </Button>
            </span>
            
            {/* Break out into its own class */}
            <span className="d-flex flex-fill justify-content-center">
                <Form>
                    <Form.Label>Add Task</Form.Label>
                    <Form.Control type="text" 
                                  placeholder="Input task name here" 
                                  onChange = {e => setTaskName(e.target.value)} 
                                  value={taskName}>
                    </Form.Control>
                </Form>
            </span>
            
            {/* Break out into its own class */}
            <span className="d-flex flex-fill justify-content-center">
                <Button variant="danger" onClick= {()=>setTaskName('')} >
                    <FontAwesomeIcon icon={ faTrash } />
                </Button>
            </span>
        </div>
    )
}