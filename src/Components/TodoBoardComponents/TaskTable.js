import React, { useState } from 'react';
import { TaskListItem } from './TaskListItem.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


  


export function TaskTable( { infoomation, func}){
    const [show, setShow] = useState(false);
    const openIt = () => setShow(true);
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
                                            key= {e.iD.toString()} 
                                            deletionConfirm = {openIt}/>);

    return(
        
            <div>
                  
                <Modal show={show} onHide= {closeIt}>
                    <Modal.header closeButton>
                        <Modal.title>You Really Deleting this Bruv</Modal.title>
                    </Modal.header>
                    <Modal.Body> {infoomation[0].title}</Modal.Body>
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