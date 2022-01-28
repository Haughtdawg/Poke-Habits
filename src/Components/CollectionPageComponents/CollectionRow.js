import React from 'react';
import '../../index.css';
import { CollectionItem } from './CollectionItem';
import Row from 'react-bootstrap/Row';

/*
    Inputs: rowData, isEgg, startHatch, newPokeLessEgg
    State variables: <none>
    Parents: CollectionTable
    Children: CollectionItem
*/

export function CollectionRow( { rowData, isEgg, startHatch, newPokeLessEgg}  ){   
/*
    Component to lay out a row of pokemon in your collection page

    rowData: Array of pokemon objects to be rendered in this row
*/
    const collectionItems = rowData.map( (element, i) => {
        return(
            <CollectionItem item={element} notEmpty = {element.id !== undefined} isEgg={isEgg} startHatch={startHatch} key={i} newPokeLessEgg={newPokeLessEgg}/>
        )
    })

    return(
            <Row>{collectionItems}</Row>
    )
}