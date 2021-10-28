import React from 'react';
import '../../index.css';
import { CollectionRow } from './CollectionRow';
import Container from 'react-bootstrap/Container';

/*
    Inputs: eggData, setEggsData, pokemonData, setPokemonData, startHatch
    State variables: <none>
    Parents: PokeTodo
    Children: CollectionRow
*/


export function CollectionTable( {eggData, setEggsData, pokemonData, setPokemonData, startHatch} ){   
/*
    Component to lay out pokemon in your collection

    pokemonData: Array of pokemon objects in the user's collection
*/

    const newPokeLessEgg = (selectediD) =>{
        /*
            Generate a new pokemon based on the egg to hatch
        */


        // Testing condition to find the egg index of the hatching egg
        const testId = (e) => e.iD === selectediD;
        const eggIndex = eggData.findIndex(testId);

        // Generate a new Pokemon object based on the data in the Egg
        const newPokemon = {
            iD: eggData[eggIndex].iD,
            name: eggData[eggIndex].name,
            image: eggData[eggIndex].pokemonImage
        }

        // Update pokemon Data with the new Pokemon object
        const newUnshiftedPokemonData = pokemonData;
        newUnshiftedPokemonData.unshift(newPokemon);
        setPokemonData(newUnshiftedPokemonData);

        // Splice egg Data from the hatched egg out 
        const newSplicedEggData = eggData;
        newSplicedEggData.splice(eggIndex, 1)
        setEggsData(newSplicedEggData);
    }
   


    const createRows = (collectionData, isEgg, startHatch) => {
        const numCols = 3; // 3 collection items per row, for now
        const tableData = Array(Math.ceil(collectionData.length/numCols)); // Number of rows needed

        // Create a tableData.length x numCols 2D array for tableData
        for(let i = 0; i < tableData.length; i++){
            tableData[i] = Array(numCols);
            for(let j = 0; j < numCols; j++){
                tableData[i][j] = collectionData.length > j+i*numCols ? collectionData[j+i*numCols] : [];
            }
        }

        // Map each element of tableData (the row data) to a CollectionRow component
        const tableRows = tableData.map((row, index) => {
            return(<CollectionRow rowData = {row} key={index} isEgg={isEgg} startHatch={startHatch} newPokeLessEgg={newPokeLessEgg}/> 
        )})
        return tableRows
    }

    const eggRows = createRows(eggData, true, startHatch);
    const pokemonRows = createRows(pokemonData, false);

    return(
        <Container className="p-5">
            <h2>Eggs:</h2>
            <Container>{eggRows}</Container>
            <h2>Pokémon:</h2>
            <Container>{pokemonRows}</Container>
        </Container>
    )
}