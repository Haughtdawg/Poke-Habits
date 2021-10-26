import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../index.css';


/*
    Inputs: jsonPoints, setJsonPoints, setWindow, eggData, setEggsData
    State variables: ModalMon
    Parents: PokeToDo
    Children: <none>
*/

 async function Capture( eggData, setEggsData ){
    /*
     * Capture will determine the user's capture value and compare it to a pokemon's cpature value, thereby determining what the pokemon in th pokeegg will be.
     */
        const MAXCAPTUREVALUE = 254; //Determined by the pokemon definedd max capture valus of 255
        const NUMPOKEMON = 150; //the number of pokemon to work with
        let POKENUMBER = Math.floor(Math.random()* NUMPOKEMON +1); //generate the next random pokemon number
        let userCaptureRoll = Math.floor(Math.random()*MAXCAPTUREVALUE +1); // give a random value [1, 255]
        let pokeAPICall = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + POKENUMBER)
                                .then( pokeInfo => pokeInfo.json());//API call that has capture_rate data;
        let pokeCaptureValue = await pokeAPICall.capture_rate;// Capture value of the random pokemon
        
        while( userCaptureRoll <= pokeCaptureValue){
            POKENUMBER = Math.floor(Math.random()* NUMPOKEMON +1);
            pokeAPICall = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + POKENUMBER)
                                .then( pokeInfo => pokeInfo.json());
            pokeCaptureValue = await pokeAPICall.capture_rate;
        }

        const newEggData = eggData;
        const newEgg = { 
            iD: POKENUMBER,
            ptsRemaining: 1000001,
            name: pokeAPICall.name[0].toUpperCase()+ pokeAPICall.name.slice(1),
            isHatchable: false,
            pokemonImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+POKENUMBER+'.png'};
            
        newEggData.unshift(newEgg);
        setEggsData(newEggData);
        //set the egg data with info from pokeAPICall
        //add that egg to collections page
        //send info to HatchPage.js 

}

export function StorePage( {jsonPoints, setJsonPoints, setWindow, eggData, setEggsData} ){
    
    const [ModalMon, setModalMon] = useState(false); //Boolean to control the new pokemon modal
    
    //Function to control if a pokegg is purchase-able and adjust jsonPoints accordingly
    const onPurchase = () => {
        /*
          1. If user jsonPoints are below the threshold value an alert is thrown to encourage more task completion
          2. otherwise, adjust jsonPoints and set the Modal for a new pokemon to true
         */
        if (jsonPoints < 1000){
            alert('You do not have enough points to purchase en egg!\n Continue on your tasks to earn more points!');
        }else{
            setJsonPoints(jsonPoints - 1000);
            setModalMon(true);
            Capture(eggData, setEggsData);
        }
    }

    //Function set the window to Collections to move to the Collections Page and close the monster modal
    const toCollection = () => {
        setWindow("collection");
        setModalMon(false);
    }

    return(
        <div>
            <h1>STORE</h1>
            <p>  
            {'You have collected ' + jsonPoints + ' ' + ' Points! \n' }            
            </p>
            <h2>
                Spend Points Below!
            </h2>
            <Button onClick = {onPurchase }>
                                            
                Buy PokeEgg Here: (1000 points minimum)
            </Button>

            <Modal show={ModalMon} onHide= {() =>  setModalMon(false)}>
                    <Modal.Header>
                        <Modal.Title>Who's that Pokemon?!</Modal.Title>
                    </Modal.Header> 
                    <Modal.Body> 
                        <p>
                            {'You\'ve caught: a new egg!'}
                        </p>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() =>  setModalMon(false)} >
                        Remain on store Page
                        </Button>

                        <Button onClick={toCollection }> 
                        Go to Collection
                        </Button>
                    </Modal.Footer>

                </Modal>
            
            
        </div>
    )
}