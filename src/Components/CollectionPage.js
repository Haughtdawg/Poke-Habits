import React from 'react';
import { CollectionTable } from './CollectionPageComponents/CollectionTable';

import '../index.css';
/*
    Inputs: 
    State variables: 
    Parents: 
    Children:
*/

export function CollectionPage({pokemonData, setPokemonData, eggData, setEggsData, startHatch}){   
/*
    Page for viewing pokemon in your collection
*/
    return(
        <div>
            <h2>Your Collection:</h2>
            <CollectionTable pokemonData={pokemonData} setPokemonData={setPokemonData} eggData={eggData} setEggsData= {setEggsData} startHatch={startHatch}/>
        </div>
    )
}