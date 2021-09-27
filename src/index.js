import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoBoard } from './Components/TodoBoard.js'
import './index.css';

function TodoPage(){
    // imported from https://react-bootstrap.github.io/components/navs/
    return(
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Todo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Points</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Collection</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>Poke-Habits</h1>
            <TodoBoard/>            
        </div>
    )
};

ReactDOM.render(
    <TodoPage />,
    document.getElementById('root')
  );

