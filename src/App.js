// https://www.youtube.com/watch?v=qvBZevK1HPo
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components 
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

import logo from './logo.png'; 

function App() {
  return (
    <Router>
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a className="navbar-brand" href="https://colesilvernail.com" target="_blank">
            <img src={logo} width="30" height="30" alt="ColeSilvernail.com" />
          </a>
          <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item" >
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item" >
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* This is where which components are being shown for routes */}
        <Route path='/' exact component={TodosList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={CreateTodo} />

      </div>

    </Router>
  );
}

export default App;