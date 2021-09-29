import React, { useState } from 'react';
import '../index.css';
import { AddTaskContainer } from './TodoBoardComponents/AddTaskContainer.js';
import { TaskTable } from './TodoBoardComponents/TaskTable.js';
import { PointsAggregate } from './TodoBoardComponents/PointsAggregate.js';
import { information } from '../Data/taskTableData.json'
import { points } from '../Data/PokePoints.json';

export function TodoBoard(){
    const [infoArray, setInfoArray] = useState(information);
    return(
        <div>
            <h2>TODO</h2>
            <AddTaskContainer/>
            <TaskTable infoomation = {infoArray} func = {setInfoArray} />
            <PointsAggregate pooints = {points} />
        </div>
    )
}