import React, { useState } from 'react';
import { TaskListItem } from './TaskListItem.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function TaskTable( { infoomation, setInfoomation, toggler }){
    const [taskIndex, setTaskIndex] = useState(0);
    const [removeModal, setRemoveModal] = useState(false);

    const openIt = (selectedKey) => {
        const testKey = (e) => e.iD === selectedKey;
        setTaskIndex(infoomation.findIndex(testKey));
        setRemoveModal(true);
    }

    const closeIt = () => setRemoveModal(false);


    const tableInfo = infoomation.map((e) => <TaskListItem 
                                            pointAmt= {e.pointAmt} 
                                            title= {e.title} 
                                            taskId= {e.iD} 
                                            key= {e.iD.toString()} 
                                            deletionConfirm = {openIt}
                                            checkBoxState = {e.isCompleted}

                                            func = {toggler}
                                            />);


    return(
        
            <div>
                <Modal show={removeModal} onHide= {closeIt}>
                    <Modal.Header closeButton>
                        <Modal.Title>You Really Deleting this Bruv</Modal.Title>
                    </Modal.Header> 
                    <Modal.Body> 
                        <p>
                            {'Are you sure you want to delete task: ' + '"' + infoomation[taskIndex].title + '"?'}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setRemoveModal(false)} >
                        DO NOT REMOVE FOR THE LOVE OF RYAN
                        </Button>

                        <Button onClick={() => {setRemoveModal(false);
                        const mutableByPass = infoomation;
                        mutableByPass.splice(taskIndex, 1);
                        setInfoomation(mutableByPass);
                          }} > 
                        TO THE SHADOW REALM
                        </Button>
                    </Modal.Footer>

                </Modal>

                {tableInfo}
            </div>

    )

}