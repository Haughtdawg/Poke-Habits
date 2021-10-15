import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../index.css';


/*
    Inputs: jsonPoints, setJsonPoints, setWindow
    State variables: ModalMon
    Parents: PokeToDo
    Children: <none>
*/

export function StorePage( {jsonPoints, setJsonPoints, setWindow} ){
    const [ModalMon, setModalMon] = useState(false); //Boolean to control the new pokemon modal

    //Function to control if a pokegg is purchase-able and adjust jsonPoints accordingly
    const onPurchase = () => {
        /*
          1. If user jsonPoints are below the threshold value an alert is thrown to encourage more task completion
          2. otherwise, adjust jsonPoints and set the Modal for a new pokemon to true
         */
        if (jsonPoints < 1000){
            alert('You do not have enough points to purchase en egg!\n Continue on your tasks to earn more points!')
        }else{
            setJsonPoints(jsonPoints - 1000)
            setModalMon(true)
        }
    }

    //Function set the window to Collections to move to the Collections Page and close the monster modal
    const toCollection = () => {
        setWindow("collections")
        setModalMon(false)

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
            <Button onClick = {onPurchase}>
                Buy PokeEgg Here: (1000 points minimum)
            </Button>

            <Modal show={ModalMon} onHide= {() =>  setModalMon(false)}>
                    <Modal.Header>
                        <Modal.Title>Who's that Pokemon?!</Modal.Title>
                    </Modal.Header> 
                    <Modal.Body> 
                        <p>
                            {'You\'ve caught: ' + '"' + 'bulbasaur' + '"!'}
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