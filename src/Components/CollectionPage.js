import React from 'react';
import { CollectionTable } from './CollectionPageComponents/CollectionTable';

import '../index.css';
/*
    Inputs: poekmonData, setPokemonData, eggData, setEggsData, startHatch
    State variables: <none>
    Parents: pokeToDo
    Children: CollectionTable
*/

export function CollectionPage({pokemonData, setPokemonData, eggData, setEggsData, startHatch}){   
/*
    Page for viewing eggs and pokemon in your collection
*/
    return(
        <div>
            <h2>Your Collection:</h2>
            <CollectionTable pokemonData={pokemonData} setPokemonData={setPokemonData} eggData={eggData} setEggsData= {setEggsData} startHatch={startHatch}/>
        </div>
    )
}