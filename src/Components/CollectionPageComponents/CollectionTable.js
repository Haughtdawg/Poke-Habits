import React from 'react';
import '../../index.css';
import { CollectionRow } from './CollectionRow';


/*
    Inputs: collectionData
    State variables: <none>
    Parents: PokeTodo
    Children: CollectionRow
*/


export function CollectionTable( {eggData, pokemonData, startHatch} ){   
/*
    Component to lay out pokemon in your collection

    pokemonData: Array of pokemon objects in the user's collection
*/
    const createRows = (collectionData, isEgg, startHatch) => {
        const numCols = 3; // 3 collection items per row, for now
        const tableData = Array(Math.ceil(collectionData.length/numCols)); // Number of rows needed

        // Create a tableData.lengh x numCols 2D array for tableData
        for(let i = 0; i < tableData.length; i++){
            tableData[i] = Array(numCols);
            for(let j = 0; j < numCols; j++){
                tableData[i][j] = collectionData.length > j+i*numCols ? collectionData[j+i*numCols] : [];
            }
        }

        // Map each element of tableData (the row data) to a CollectionRow component
        const tableRows = tableData.map((row, index) => {
            return(<CollectionRow rowData = {row} key={index} isEgg={isEgg} startHatch={startHatch}/> 
        )})
        return tableRows
    }

    const eggRows = createRows(eggData, true, startHatch);
    const pokemonRows = createRows(pokemonData, false);

    return(
        <div>
            <h3>Eggs:</h3>
            <div>{eggRows}</div>
            <div></div>
            <h3>Pokemon:</h3>
            <div>{pokemonRows}</div>
        </div>
    )
}