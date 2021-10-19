import React, {useState} from 'react';
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
    const [eggData, setEggsData] = useState(eggs);

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
            <h1>Poke-Habits</h1>
            {(window ==='home')&&<ToDoPage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints} eggs = {eggData} setEggs= {setEggsData}/>}
            {(window ==='store')&&<StorePage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints} setWindow = {setWindow}/>}  
            {(window === 'collection')&&<CollectionPage pokemonData = {pokemonData} eggData={eggData} startHatch={() => setWindow('hatch')}/>}   
            {(window === 'hatch')&&<HatchPage/>}  
        </div>
    )
};

ReactDOM.render(
    <PokeToDo />,
    document.getElementById('root')
  );

