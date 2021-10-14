import React from 'react';
import Button from 'react-bootstrap/Button';
import '../index.css';


/*
    Inputs: 
    State variables: 
    Parents: 
    Children:
*/

export function StorePage( {jsonPoints}){
    
/*display jsonPoints
button for purchasing a ranPokeEgg
add navbar for displaying what has been captured with options to take you to collection or stay in store page  */
    return(
        <div>
            <h1>store</h1>
            <h2>
                Store
            </h2>
            <text>
            {'You have collected ' + jsonPoints + ' ' + ' Points! \n' }            
            </text>
            <h2>
                SPend Points Here
            </h2>
            <Button onClick = {() => alert('Who\'s that pokemon!')}>
                Buy PokeEgg Here: (1000 points minimum)
            </Button>
            
        </div>
    )
}