import React from 'react';
 
/*
    Inputs: points
    State variables: <none>
    Parents: TodoPage
    Children: <none>
*/

export function PointsAggregate( {points} ){

    return(
        <div>
            <h2>
                You have {points} PokePoints!
            </h2>
        </div>
    )
}