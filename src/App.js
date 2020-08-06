import React from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={classes.Header}> 
        <h3>
          To Do List!
        </h3>
      </header>
      <div className={classes.ToDoContentDiv}> 
          <ToDoList />
          
      </div>
    </div>
  );
}

export default App;
