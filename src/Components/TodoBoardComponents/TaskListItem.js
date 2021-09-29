import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';



export function TaskListItem( {pointAmt, title, deletionConfirm} ) {
    const [checkBoxState, setBoxState] = useState(false);
   
    
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
                        setBoxState(!checkBoxState)
                        alert(checkBoxState)
                    }
                }/>
            </Form>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Title*/}
            <p>{title}</p>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Deletion*/}
            <Button onClick = {deletionConfirm}>
                {/*pass {function, ID } function will take in ID  */}
            <FontAwesomeIcon icon= {faTrash} />
            </Button>
            </span>
           

        </div>
    )
}