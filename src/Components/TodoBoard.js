import React from 'react';
import '../index.css';

function TodoBoard(){
    return(
        <div>
            <h2>TODO</h2>
            <AddTaskContainer/>
            <TaskTable/>
            <PointsAggregate/>
        </div>
    )
}