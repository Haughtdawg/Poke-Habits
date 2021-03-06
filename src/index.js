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

 // Need to figure out how to set this config...
const mode = "dev";
const url = mode === "dev" ? "http://localhost:5000/" : "";
export const MainURL = React.createContext(url);

function PokeToDo(){
    const [window, setWindow] = useState('home');
    const [jsonPoints, setJsonPoints] = useState(points);
    const [pokemonData, setPokemonData] = useState(pokemon);
    const [eggData, setEggsData] = useState(eggs); //Eggs, you meant Egg <-   --_____ --


   
    

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
            <h1>Poké-Habits</h1>
            <MainURL.Provider value = {url}> 
                {(window ==='home')&&<ToDoPage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints} eggs = {eggData} setEggs= {setEggsData} setWindow={setWindow}/>}
                {(window ==='store')&&<StorePage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints} setWindow = {setWindow} eggData = {eggData} setEggsData = {setEggsData}/>}  
                {(window === 'collection')&&<CollectionPage pokemonData = {pokemonData} setPokemonData={setPokemonData} eggData={eggData} setEggsData={setEggsData} startHatch={() => setWindow('hatch')}/>}   
                {(window === 'hatch')&&<HatchPage setWindow= {setWindow} pokemonData = {pokemonData}/>}  
            </MainURL.Provider>
        </div>
    )
};

ReactDOM.render(
    <PokeToDo />,
    document.getElementById('root')
  );

