import React, {useState, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Container from 'react-bootstrap/Container';
import { MainURL } from '..';

/*
    Capture
    Inputs: eggsData, setEggsData
    State variables: <none>
    Parents: StorePage
    Children: <none>
*/
/*
    StorePage
    Inputs: jsonPoints, setJsonPoints, setWindow, eggsData, setEggsData
    State variables: purchaseModal
    Parents: PokeToDo
    Children: StorePage
*/

export function StorePage( {jsonPoints, setJsonPoints, setWindow, getEggsData} ){
    /*
        Page for viewing the Store
    */
    //const eggPrice = 1000; // 1000 points for an egg

    const [purchaseModal, setPurchaseModal] = useState(false); // Boolean to control the new pokemon modal
    const [modalText, setModalText] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [buttonText, setButtonText] = useState('');

    const url = useContext(MainURL);
    
    // Function to control if a pokegg is purchaseable and adjust jsonPoints accordingly
    const onPurchase = async () => {
        /*
          1. If user jsonPoints are below the threshold value an alert is thrown to encourage more task completion
          2. Otherwise, adjust jsonPoints and set the Modal for a new pokemon to true
         */
        if (jsonPoints < 1000){
            setModalText('You do not have enough points to purchase an egg.\n Keep completing tasks to earn more points!');
            setModalTitle('Insufficient Points');
            setButtonText('Back');
        }else{
            setModalText('You got a new egg! View it in your collection and collect points to hatch it');
            setModalTitle('New Egg');
            setButtonText('Remain on Store Page');
            setJsonPoints(jsonPoints - 1000);
            try {
                const response = await fetch(url + 'store', 
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({userID: 1})
                    }).then(getEggsData);
            } catch (error) {
                console.error(error.message);
                return
            }
        }
        setPurchaseModal(true);
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
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header> 
                <Modal.Body> 
                    <p>
                        {modalText}
                    </p>
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() =>  setPurchaseModal(false)} >
                    {buttonText}
                    </Button>

                    {modalTitle === "New Egg"&&<Button onClick={toCollection }>
                    Go to Collection Page
                    </Button>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}