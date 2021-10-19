import React from 'react';
import { CollectionTable } from './CollectionPageComponents/CollectionTable';

import '../index.css';
/*
    Inputs: 
    State variables: 
    Parents: 
    Children:
*/

export function CollectionPage({pokemonData, eggData, startHatch}){   
/*
    Page for viewing pokemon in your collection
*/
    return(
        <div>
            <h2>Your Collection:</h2>
            <CollectionTable pokemonData={pokemonData} eggData={eggData} startHatch={startHatch}/>
        </div>
    )
}