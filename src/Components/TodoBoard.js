import React from 'react';
import '../index.css';
import { AddTaskContainer } from './TodoBoardComponents/AddTaskContainer.js'

export function TodoBoard(){
    return(
        <div>
            <h2>TODO</h2>
            <AddTaskContainer/>
            {/*<TaskTable/>
            <PointsAggregate/>*/}
        </div>
    )
}