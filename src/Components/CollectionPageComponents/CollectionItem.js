import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../index.css';
/*
    Inputs: item, notEmpty, isEgg, startHatch
    State variables: <none>
    Parents: CollectionRow
    Children: <none>
*/

export function CollectionItem({ item, notEmpty, isEgg, startHatch, newPokeLessEgg}){   
/*
    Component to render a single item in your collection (egg or pokemon)
*/
    const image = isEgg ? "https://cdn2.bulbagarden.net/upload/4/45/Spr_4d_Egg.png" : item.image;
    const text = isEgg ? "egg" : item.name;
    const haveEgg = isEgg&&notEmpty;
    const pointsText = item.ptsRemaining === 1 ? " Point Remaining" : " Points Remaining";

    return(
        <span className = "d-flex flex-fill justify-content-center align-items-center flex-column">
            {notEmpty&&<img src={image} alt={text}/>}
            {notEmpty&&<p>{text}</p>}
            {haveEgg&&item.isHatchable&&<Button onClick= { () => {
                                                        startHatch()
                                                        newPokeLessEgg(item.iD)
                                                        }}>
                                                        Hatch Now!
                                        </Button>}
            {haveEgg&&!item.isHatchable&&<p>{item.ptsRemaining + pointsText}</p>}
        </span>
    )
}