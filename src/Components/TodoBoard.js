import React from 'react';
import '../index.css';
import { AddTaskContainer } from './TodoBoardComponents/AddTaskContainer.js';
import { TaskTable } from './TodoBoardComponents/TaskTable.js';
import { PointsAggregate } from './TodoBoardComponents/PointsAggregate.js';
import { information } from '../Data/taskTableData.json'
import { points } from '../Data/PokePoints.json';

export function TodoBoard(){
    return(
        <div>
            <h2>TODO</h2>
            <AddTaskContainer/>
            <TaskTable infoomation = {information} />
            <PointsAggregate pooints = {points} />
        </div>
    )
}