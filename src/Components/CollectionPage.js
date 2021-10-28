import React from 'react';
import { CollectionTable } from './CollectionPageComponents/CollectionTable';
import Container from 'react-bootstrap/Container';
import '../index.css';
/*
    Inputs: pokemonData, setPokemonData, eggData, setEggsData, startHatch
    State variables: <none>
    Parents: PokeToDo
    Children: CollectionTable
*/

export function CollectionPage({pokemonData, setPokemonData, eggData, setEggsData, startHatch}){   
/*
    Page for viewing eggs and pokemon in your collection
*/
    return(
        <Container className="bg-light my-1 border rounded">
            <h1 className="p-2">Your Collection</h1>
            <CollectionTable pokemonData={pokemonData} setPokemonData={setPokemonData} eggData={eggData} setEggsData= {setEggsData} startHatch={startHatch}/>
        </Container>
    )
}