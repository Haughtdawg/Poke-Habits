import react, { usestate } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';



export function TaskListItem( {pointAmt, title} ) {
    
    return(
        <div className= "d-flex">
            <span className = "d-flex flex-fill justify-content-center">{/*point amount*/}
            <p>{pointAmt}</p>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*checkbox*/}
            <Form>
                <Form.Check type= {'checkbox'}/>
            </Form>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Title*/}
            <p>{title}</p>
            </span>

            <span className = "d-flex flex-fill justify-content-center">{/*Deletion*/}
            <Button onClick = {() => alert('Are you sure you want to delete this task? :/') }>
            <FontAwesomeIcon icon= {faTrash} />
            </Button>
            </span>
           

        </div>
    )
}