import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Person from './Persons/Person';


const App = props => {
  const [ personsState, setPersonsState ] = useState({
    Persons : [
      { name: "uzair", age: 28 },
      { name: "ali", age: 30 },
      { name: "khan", age: 60 },
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      Persons : [
        { name: "uzair shamim", age: 18 },
        { name: "ali haider", age: 20 },
        { name: "khan singh", age: 40 },
      ]
    })
  }

    return(
      <div className="App">
      <h1>I am react App</h1>
      <button onClick={switchNameHandler}>Change State</button>

      <Person name={personsState.Persons[0].name} 
      age={personsState.Persons[0].age}
      click={switchNameHandler} 
      />

      <Person name={personsState.Persons[1].name} 
      age={personsState.Persons[1].age}
      >My Hobbies: Racing
      </Person>

      <Person name={personsState.Persons[2].name}
       age={personsState.Persons[2].age}
        />
    </div>
    )
}

export default App;