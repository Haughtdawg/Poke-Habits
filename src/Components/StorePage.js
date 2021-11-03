import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Container from 'react-bootstrap/Container';

/*
    Capture
    Inputs: eggData, setEggsData
    State variables: <none>
    Parents: StorePage
    Children: <none>
*/
/*
    StorePage
    Inputs: jsonPoints, setJsonPoints, setWindow, eggData, setEggsData
    State variables: purchaseModal
    Parents: PokeToDo
    Children: StorePage
*/

 async function Capture( eggData, setEggsData ){
    /*
        Capture will determine the user's capture value and compare it to a pokemon's capture value, thereby determining what the pokemon in the pokeegg will be.
     */
        const MAXCAPTUREVALUE = 254; // Determined by the pokemon defined max capture value of 255
        const NUMPOKEMON = 150; // Number of pokemon to work with (currently Gen 1)
        let POKENUMBER = Math.floor(Math.random()* NUMPOKEMON +1); // Generate the next random pokemon number
        let userCaptureRoll = Math.floor(Math.random()*MAXCAPTUREVALUE +1); // Give a random value [1, 255] for the user to capture pokemon with
        let pokeAPICall = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + POKENUMBER)
                                .then( pokeInfo => pokeInfo.json()); // API call that has capture_rate data
        let pokeCaptureValue = await pokeAPICall.capture_rate; // Capture value of the random pokemon
        
        /* 
            If the capture roll is LESS THAN OR EQUAL TO the capture value, pokemon is caught.
            Therefore, if capture roll is GREATER THAN the capture value, we need to roll again.
        */
        while(userCaptureRoll > pokeCaptureValue){ 
            POKENUMBER = Math.floor(Math.random()* NUMPOKEMON +1);
            pokeAPICall = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + POKENUMBER)
                                .then( pokeInfo => pokeInfo.json());
            pokeCaptureValue = await pokeAPICall.capture_rate;
        }

        const ptsRemaining = 255*(pokeAPICall.hatch_counter+1); // Formula from hatch rate description of pokeAPI
        const newEggData = eggData; // Create a copy of EggData

        // Generate a new Egg Object
        const newEgg = { 
            iD: POKENUMBER,
            stepsToHatch: ptsRemaining,
            name: pokeAPICall.name[0].toUpperCase()+ pokeAPICall.name.slice(1),
            isHatchable: false,
            pokemonImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+POKENUMBER+'.png'
        };
            
        newEggData.unshift(newEgg); // Add new Egg object into newEggData array
        setEggsData(newEggData); // Set Egg data with new Egg Data array
}

export function StorePage( {jsonPoints, setJsonPoints, setWindow, eggData, setEggsData} ){
    /*
        Page for viewing the Store
    */
    //const eggPrice = 1000; // 1000 points for an egg

    const [purchaseModal, setPurchaseModal] = useState(false); // Boolean to control the new pokemon modal
    
    // Function to control if a pokegg is purchaseable and adjust jsonPoints accordingly
    const onPurchase = () => {
        /*
          1. If user jsonPoints are below the threshold value an alert is thrown to encourage more task completion
          2. Otherwise, adjust jsonPoints and set the Modal for a new pokemon to true
         */
        if (jsonPoints < 1000){
            alert('You do not have enough points to purchase an egg.\n Keep completing tasks to earn more points!');
        }else{
            setJsonPoints(jsonPoints - 1000);
            setPurchaseModal(true);
            Capture(eggData, setEggsData);
        }
    }

    // Function set the window to Collections to move to the Collections Page and close the monster modal
    const toCollection = () => {
        setWindow("collection");
        setPurchaseModal(false);
    }

    return(
        <div>
            <Container className="p-5 mb-4 bg-light border rounded-3">
                <Container fluid className="py-5">
                    <h1>Pokémon Egg Store</h1>
                </Container>
                <p className="fs-4 col-md-8">  
                    {'You currently have ' + jsonPoints + ' ' + ' Points! Click below to spend them on a Pokémon Egg!\n' }            
                </p>
                <Button size="lg" onClick = {onPurchase }>                       
                    Buy a Pokémon Egg Here: (1000 points)
                </Button>
            </Container>
                
            <Modal show={purchaseModal} onHide= {() =>  setPurchaseModal(false)}>
                <Modal.Header>
                    <Modal.Title>New Egg</Modal.Title>
                </Modal.Header> 
                <Modal.Body> 
                    <p>
                        You got a new egg! View it in your collection and collect points to hatch it
                    </p>
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() =>  setPurchaseModal(false)} >
                    Remain on Store Page
                    </Button>

                    <Button onClick={toCollection }> 
                    Go to Collection Page
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}