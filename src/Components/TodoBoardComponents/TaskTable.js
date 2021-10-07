import React, { useState } from 'react';
import { AddTaskContainer } from './AddTaskContainer.js';
import { TaskListItem } from './TaskListItem.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function TaskTable( { infoomation, func }){
    const [taskIndex, setTaskIndex] = useState(0);
    const [removeModal, setRemoveModal] = useState(false);
    const [addModal, setAddModal] = useState(false);

    const openIt = (selectedKey) => {
        const testKey = (e) => e.iD === selectedKey;
        setTaskIndex(infoomation.findIndex(testKey));
        setRemoveModal(true);
    }

    //const closeIt = () => setRemoveModal(false) || setAddModal(false);

    const rowInfo = infoomation.map((e) => <TaskListItem 
                                            pointAmt= {e.pointAmt} 
                                            title= {e.title} 
                                            taskId= {e.iD} 
                                            key= {e.iD.toString()} 
                                            deletionConfirm = {openIt}
                                            />);

    const newTaskName = () => <AddTaskContainer
                                newTaskName= {e.title.value}
                                />;

    return(
        
            <div>
                <Modal show={removeModal} onHide= {() => setRemoveModal(false)}>
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
                        func(mutableByPass);
                          }} > 
                        TO THE SHADOW REALM
                        </Button>
                    </Modal.Footer>

                </Modal>

                <Modal show={addModal} onHide= {() =>  setAddModal(false)}>
                    <Modal.Header addButton>
                        <Modal.Title>Adding Task</Modal.Title>
                    </Modal.Header> 
                    <Modal.Body> <p>
                        {'Are you sure you want to add the following: ' + '"' + taskName + '"?'}
                        {/* taskname above has to be the prop passed through newTaskname */}
                        </p>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() =>  setAddModal(false)} >
                        DO NOT REMOVE FOR THE LOVE OF RYAN
                        </Button>

                        <Button onClick={ () =>  {setAddModal(false);
                        const mutableByPass = infoomation;
                        mutableByPass.splice(taskIndex, 1);
                        func(mutableByPass);
                          }} > 
                        TO THE SHADOW REALM
                        </Button>
                    </Modal.Footer>

                </Modal>
                {rowInfo}
            </div>

    )

}