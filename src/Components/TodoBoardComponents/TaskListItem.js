import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';



export function TaskListItem( {pointAmt, title, taskId, deletionConfirm, checkBoxState, func} ) {
   
    const theIDFunction = () => {
        deletionConfirm(taskId);
    }
    
    return(
        <div className= "d-flex">
            <span className = "d-flex flex-fill justify-content-center">{/*point amount*/}
            <p>{pointAmt}</p>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*checkbox*/}
            <Form>
                <Form.Check type= {'checkbox'}
                value={checkBoxState}  onChange={
                    () => {
                        func(taskId)
                        {/*create submit button->
                        Modal to confirm the tasks to mark as complete
                        get pointAmt s  and addthem to pokePoints
                        remove apppropiate TaskListItems */}
                    }
                }/>
            </Form>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Title*/}
            <p>{title}</p>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Deletion*/}
            <Button onClick = {theIDFunction}>
                {/*pass {function, ID } function will take in ID  */}
            <FontAwesomeIcon icon= {faTrash} />
            </Button>
            </span>
           

        </div>
    )
}