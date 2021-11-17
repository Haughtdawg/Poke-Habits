import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToDoPage } from './Components/TodoPage.js';
import { StorePage } from './Components/StorePage.js';
import { CollectionPage } from './Components/CollectionPage.js';
import { HatchPage } from './Components/HatchPage'
import { points } from './Data/PokePoints.json';
import { pokemon } from './Data/Pokemon.json';
import { eggs } from './Data/Eggs.json';
import './index.css';

function PokeToDo(){
    const [window, setWindow] = useState('home');
    const [jsonPoints, setJsonPoints] = useState(points);
    const [pokemonData, setPokemonData] = useState(pokemon);
    const [eggData, setEggsData] = useState(eggs); //Eggs, you meant Egg <-   --_____ --
    const [data, setData] = useState(null);

    useEffect(() => { 
        callBackendAPI()
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    });

    const callBackendAPI = async () => {
        const response = await fetch('/test');
        const body = await response.json();
    
        if(response.status !== 200){
          throw Error(body.message)
        }
        return body;
      };

    // imported from https://react-bootstrap.github.io/components/navs/
    return(
        <div>
            <Nav variant="tabs" activeKey={window} defaultActiveKey="/home" onSelect={eventKey => setWindow(eventKey)}>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Todo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="store">Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="collection">Collection</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>{data}</h1>
            <h1>Poké-Habits</h1>
            {(window ==='home')&&<ToDoPage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints} eggs = {eggData} setEggs= {setEggsData} setWindow={setWindow}/>}
            {(window ==='store')&&<StorePage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints} setWindow = {setWindow} eggData = {eggData} setEggsData = {setEggsData}/>}  
            {(window === 'collection')&&<CollectionPage pokemonData = {pokemonData} setPokemonData={setPokemonData} eggData={eggData} setEggsData={setEggsData} startHatch={() => setWindow('hatch')}/>}   
            {(window === 'hatch')&&<HatchPage setWindow= {setWindow} pokemonData = {pokemonData}/>}  
        </div>
    )
};

ReactDOM.render(
    <PokeToDo />,
    document.getElementById('root')
  );

