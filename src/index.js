import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToDoPage } from './Components/TodoPage.js';
import { StorePage } from './Components/StorePage.js';
import { points } from './Data/PokePoints.json';
import './index.css';

function PokeToDo(){
    const [window, setWindow] = useState('home')
    const [jsonPoints, setJsonPoints] = useState(points)

    // imported from https://react-bootstrap.github.io/components/navs/
    return(
        <div>
            <Nav variant="tabs" defaultActiveKey="/home" onSelect={eventKey => setWindow(eventKey)}>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Todo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="store">Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="collections">Collection</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>Poke-Habits</h1>
            {(window==='home')&&<ToDoPage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints}/>}
            {(window ==='store')&&<StorePage jsonPoints = {jsonPoints} setJsonPoints = {setJsonPoints} setWindow = {setWindow}/>}          
        </div>
    )
};

ReactDOM.render(
    <PokeToDo />,
    document.getElementById('root')
  );

