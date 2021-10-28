import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../index.css';
import Col from 'react-bootstrap/Col';
/*
    Inputs: item, notEmpty, isEgg, startHatch, newPokeLessEgg
    State variables: <none>
    Parents: CollectionRow
    Children: <none>
*/

export function CollectionItem({ item, notEmpty, isEgg, startHatch, newPokeLessEgg}){   
/*
    Component to render a single item in your collection (egg or pokemon)
*/

    // Conditionals for whether the item is an egg or a pokemon and its related attributes
    const image = isEgg ? "https://cdn2.bulbagarden.net/upload/4/45/Spr_4d_Egg.png" : item.image; 
    const text = isEgg ? "Pokémon Egg" : item.name;
    const haveEgg = isEgg&&notEmpty;
    const pointsText = item.stepsToHatch === 1 ? " Point Remaining" : " Points Remaining";

    return(
        <Col className="d-flex flex-column align-items-center">
            {notEmpty&&<img src={image} alt={text}/>}
            {notEmpty&&<p className="text-center fs-5">{text}</p>}
            {haveEgg&&item.isHatchable&&<Button onClick= { () => {
                                                        startHatch()
                                                        newPokeLessEgg(item.iD)
                                                        }}>
                                                        Hatch Now!
                                        </Button>}
            {haveEgg&&!item.isHatchable&&<p className="text-center fs-5">{item.stepsToHatch + pointsText}</p>}
        </Col>
    )
}