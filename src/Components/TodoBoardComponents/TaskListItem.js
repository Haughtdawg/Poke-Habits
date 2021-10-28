import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Row className="d-flex justify-content-center border rounded bg-light">
            <Col xs={4} className = "d-flex justify-content-center align-items-center">{/*point amount*/}
                <p className="fs-5 mb-0">{pointAmt}</p>
            </Col>

            <Col xs={1} className="d-flex align-items-center">{/*checkbox*/}
                <Form>
                    <Form.Check type= {'checkbox'}
                                value={checkBoxState}  
                                onChange={() => {toggler(taskId)}}
                    />
                </Form>
            </Col>

            <Col xs={6} className = "d-flex justify-content-center align-items-center">{/*Title*/}
                <p className="fs-5 mb-0">{title}</p>
            </Col>

            <Col xs={1} className = "d-flex justify-content-end align-items-center">{/*Deletion*/}
                <Button variant = "danger" onClick = {() => deletionConfirm(taskId)}>
                    <FontAwesomeIcon icon= {faTrash} />
                </Button>
            </Col>
        </Row>
    )
}