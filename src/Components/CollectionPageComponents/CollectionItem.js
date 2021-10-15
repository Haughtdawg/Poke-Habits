import React from 'react';
import '../../index.css';
/*
    Inputs: pokemon
    State variables: <none>
    Parents: CollectionRow
    Children: <none>
*/

export function CollectionItem({pokemon, notEmpty}){   
/*
    Component to render a single pokemon in your collection
*/
    console.log(pokemon.name)
    console.log(notEmpty)
    return(
        <span className = "d-flex flex-fill justify-content-center align-items-center flex-column">
            {notEmpty&&<img src={pokemon.image} alt={pokemon.name}/>}
            {notEmpty&&<p>{pokemon.name}</p>}
        </span>
    )
}