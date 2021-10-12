import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

/*
    Inputs: pointAmt, title, taskId, deletionConfirm, checkBoxState, toggler
    State variables: <none>
    Parents: TaskTable
    Children: <none>
*/
export function TaskListItem( {pointAmt, title, taskId, deletionConfirm, checkBoxState, toggler} ) {
   /*
        pointAmt: Int for how many points this task is worth
        title: String name of the task
        taskId: unique ID for this task
        deletionConfirm: Callback function to open deletion confirm modal. Also sets the selected task in TaskTable
        checkBoxState: Completed state for this task
        toggler: Callback function to toggle the check boxes of TaskListItem on click
   */
    
    return(
        <div className= "d-flex">
            <span className = "d-flex flex-fill justify-content-center">{/*point amount*/}
            <p>{pointAmt}</p>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*checkbox*/}
            <Form>
                <Form.Check type= {'checkbox'}
                            value={checkBoxState}  
                            onChange={() => {toggler(taskId)}}
                />
            </Form>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Title*/}
            <p>{title}</p>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Deletion*/}
            <Button onClick = {() => deletionConfirm(taskId)}>
                <FontAwesomeIcon icon= {faTrash} />
            </Button>
            </span>
           

        </div>
    )
}