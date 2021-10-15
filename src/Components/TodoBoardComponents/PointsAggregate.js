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
            <p>
                PokePoints: {points}!!
            </p>
        </div>
    )
}