import React, { useEffect, useState } from 'react';
import { TaskListItem } from './TaskListItem.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function TaskTable( { infoomation }){
    const [taskIndex, setTaskIndex] = useState(0);
    const [show, setShow] = useState(false);

    const openIt = (selectedKey) => {
        const testKey = (e) => e.iD === selectedKey;
        setTaskIndex(infoomation.findIndex(testKey));
        setShow(true);
    }

    const closeIt = () => setShow(false);

    const deleteTask = (iD) => {

        {/*  //once confirmed, find array/element iD -> 
                       //remove it from the array and concat the rest of the array?,
                       //update tasktable  */}        
        
        
        //var confirmation = confirm('Are you sure you want to delete this task? :/');
    };

    const rowInfo = infoomation.map((e) => <TaskListItem 
                                            pointAmt= {e.pointAmt} 
                                            title= {e.title} 
                                            taskId= {e.iD} 
                                            key= {e.iD.toString()} 
                                            deletionConfirm = {openIt}
                                            />);

    return(
        
            <div>
                <Modal show={show} onHide= {closeIt}>
                    <Modal.Header closeButton>
                        <Modal.Title>You Really Deleting this Bruv</Modal.Title>
                    </Modal.Header> 
                    <Modal.Body> <p>
                        {'Are you sure you want to delete task: ' + '"' + infoomation[taskIndex].title + '"'}
                        </p>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeIt} >
                        DO NOT REMOVE FOR THE LOVE OF RYAN
                        </Button>

                        <Button onClick={closeIt}>
                        TO THE SHADOW REALM
                        </Button>
                    </Modal.Footer>

                </Modal>
                {rowInfo}
            </div>

    )

}