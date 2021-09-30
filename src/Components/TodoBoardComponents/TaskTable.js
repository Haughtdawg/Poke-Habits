import React, { useEffect, useState } from 'react';
import { TaskListItem } from './TaskListItem.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


  


export function TaskTable( { infoomation, func,}){
    const [taskIndex, setTaskIndex] = useState(0);
    
    const [selectedKey, setSelectedKey] = useState('');
    const [show, setShow] = useState(false);
    /*
    useEffect (() => {
        const theIndex = (e) => e.iD === selectedKey;
        setTaskIndex(infoomation.findIndex(theIndex));
        setShow(true);
    } , [selectedKey]);
*/
    const openIt = () => {
         console.log('here ' + selectedKey)
        const theIndex = (e) => e.iD === selectedKey;
        setTaskIndex(infoomation.findIndex(theIndex));
        setShow(true);

        //taskIndex= setSelectedKey(key);
        
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
                                            ble= {e.iD.toString()} 
                                            key= {e.iD.toString()} 
                                            deletionConfirm = {openIt}
                                            setSelection = {setSelectedKey}
                                            />);

    return(
        
            <div>
                  {console.log(taskIndex)}
                <Modal show={show} onHide= {closeIt}>
                    <Modal.Header closeButton>
                        <Modal.Title>You Really Deleting this Bruv</Modal.Title>
                    </Modal.Header> 
                    <Modal.Body> <p>
                        {infoomation[taskIndex].title};
                        {selectedKey};
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