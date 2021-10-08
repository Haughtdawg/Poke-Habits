import React, { useState } from 'react';
import '../index.css';
import { AddTaskContainer } from './TodoBoardComponents/AddTaskContainer.js';
import { TaskTable } from './TodoBoardComponents/TaskTable.js';
import { PointsAggregate } from './TodoBoardComponents/PointsAggregate.js';
import { information } from '../Data/taskTableData.json';
import { points } from '../Data/PokePoints.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function TodoBoard(){
    const [infoArray, setInfoArray] = useState(information);
    const [addModal, setAddModal] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');
    const [nextID, setNextID] = useState(4);
    const [newTaskPoints, setNewTaskPoints] = useState(5);
    const [jsonPoints, setJsonPoints] = useState(points);

    const toggleCheckBox = (checkedID) =>{
        const checkedInfoArray = infoArray;
        const eterator = e => e.iD === checkedID;
        const checkedIndex = checkedInfoArray.findIndex(eterator);
        checkedInfoArray[checkedIndex].isCompleted = true;
        setInfoArray(checkedInfoArray);
    }

    const submitTasks= () =>{
        const submissionArray = infoArray.filter(e => e.isCompleted === true);
        const pointsIterator = e => setJsonPoints(e.pointAmt + jsonPoints);
        submissionArray.forEach(pointsIterator);
        /*Points update late(?) and we need to lift pooints from PointsAggregate to display correct points */

        const keepArray = infoArray.filter(o => o.isCompleted === false);
        setInfoArray(keepArray);
        console.log(submissionArray);
        console.log(jsonPoints);
        console.log( keepArray);
        
    }

    const addTask = () => {
        setAddModal(false);
        const leObject = {iD: nextID , pointAmt: newTaskPoints , title: newTaskName, isComplete: false};
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
            <TaskTable infoomation = {infoArray} func = {setInfoArray} toggler = {toggleCheckBox} />
            <PointsAggregate pooints = {points} />
            <Button onClick={submitTasks}>SubmitTasks!</Button>
        </div>
    )
}