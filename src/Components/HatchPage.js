import React from 'react';
import '../index.css';
import Button from 'react-bootstrap/Button';

/*
    Inputs: setWindow, eggsData, setEggsData, pokemonData, setPokemonData
    State variables: 
    Parents: PokeTo-Do
    Children:none... yet -.-
*/

export function HatchPage( {setWindow, pokemonData}){   
/*
    Show me the hatch
*/
    const image = pokemonData[0].image;
    const text = "heey";
    return(
        <div>
            {<img src={image} alt={text}/>}
            
            
            <p>
                Congratulations, your egg has digivoled into: {pokemonData[0].name}!
            </p>
            <Button onClick= {()=> setWindow("collection")}>
                Collections
            </Button>
        </div>
    )
}