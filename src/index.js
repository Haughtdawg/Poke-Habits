import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoBoard } from './Components/TodoBoard.js';
import { PointsPage } from './Components/PointsPage.js';
import './index.css';

function TodoPage(){
    const [window, setWindow] = useState('home')
    console.log(window === 'home')
    // imported from https://react-bootstrap.github.io/components/navs/
    return(
        <div>
            <Nav variant="tabs" defaultActiveKey="/home" onSelect={eventKey => setWindow(eventKey)}>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Todo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="points">Points</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="collections">Collection</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>Poke-Habits</h1>
            {(window==='home')&&<TodoBoard/>}
            {(window ==='points')&&<PointsPage/>}          
        </div>
    )
};

ReactDOM.render(
    <TodoPage />,
    document.getElementById('root')
  );

