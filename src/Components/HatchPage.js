import React from 'react';
import '../index.css';
import Button from 'react-bootstrap/Button';

/*
    Inputs: setWindow, setPokemonData
    State variables: <none>
    Parents: PokeToDo
    Children:<none>
*/

export function HatchPage( {setWindow, pokemonData}){   
/*
    Page that displays which pokemon has been hatched
*/
    const image = pokemonData[0].image;
    const text = pokemonData[0].image;
    return(
        <div>
            <img src={image} alt={text}/>
            
            
            <p>
                Congratulations, your egg has hatched into: {pokemonData[0].name}!
            </p>
            <Button onClick= {()=> setWindow("collection")}>
                Collections
            </Button>
        </div>
    )
}