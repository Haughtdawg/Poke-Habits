import React from 'react';
import '../../index.css';
import { CollectionItem } from './CollectionItem';


/*
    Inputs: rowData
    State variables: <none>
    Parents: CollectionTable
    Children: CollectionItem
*/

export function CollectionRow( { rowData, isEgg, startHatch, newPokeLessEgg}  ){   
/*
    Component to lay out a row of pokemon in your collection

    rowData: Array of pokemon objects to be rendered in this row
*/
    const collectionItems = rowData.map( (element, i) => {
        return(
            <CollectionItem item={element} notEmpty = {element.iD !== undefined} isEgg={isEgg} startHatch={startHatch} key={i} newPokeLessEgg={newPokeLessEgg}/>
        )
    })

    return(
        <div className= "d-flex">
            {collectionItems}
        </div>
    )
}