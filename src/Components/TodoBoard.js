import React, { useState } from 'react';
import '../index.css';
import { AddTaskContainer } from './TodoBoardComponents/AddTaskContainer.js';
import { TaskTable } from './TodoBoardComponents/TaskTable.js';
import { PointsAggregate } from './TodoBoardComponents/PointsAggregate.js';
import { information } from '../Data/taskTableData.json'
import { points } from '../Data/PokePoints.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function TodoBoard(){
    const [infoArray, setInfoArray] = useState(information);
    const [addModal, setAddModal] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');
    const [nextID, setNextID] = useState(4);
    const [ newTaskPoints, setNewTaskPoints] = useState(5);
    const addTask = () => {
        setAddModal(false);
        const leObject = {iD: nextID , pointAmt: newTaskPoints , title: newTaskName};
        setNextID(nextID+1);
        setNewTaskPoints(newTaskPoints+1);
        const mutableArr = infoArray;
        mutableArr.unshift(leObject);
        setInfoArray(mutableArr);
        setNewTaskName('');
    }

    return(
        <div>
            <Modal show={addModal} onHide= {() =>  setAddModal(false)}>
                    <Modal.Header>
                        <Modal.Title>Adding Task</Modal.Title>
                    </Modal.Header> 
                    <Modal.Body> 
                        <p>
                            {'Are you sure you want to add the following: ' + '"' + newTaskName + '"?'}
                        {/* taskname above has to be the prop passed through newTaskname */}
                        </p>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() =>  setAddModal(false)} >
                        DO NOT ADD FOR THE LOVE OF Yu-GI-Oh
                        </Button>

                        <Button onClick={ addTask } > 
                        You've activated my trap card! 
                        </Button>
                    </Modal.Footer>

                </Modal>

            <h2>TODO</h2>
            <AddTaskContainer taskName = {newTaskName} setTaskName = {setNewTaskName} setShowModal = { setAddModal }/>
            <TaskTable infoomation = {infoArray} func = {setInfoArray} />
            <PointsAggregate pooints = {points} />
        </div>
    )
}