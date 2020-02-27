import React, { Component } from 'react';
import './App.css';
import Person from './Persons/Person';
import person from './Persons/Person';


class App extends Component{
  state = {
    Persons : [
      { name: "uzair", age: 28 },
      { name: "ali", age: 30 },
      { name: "khan", age: 60 },
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      Persons : [
        { name: newName, age: 10 },
        { name: "ali haider", age: 20 },
        { name: "khan singh", age: 40 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      Persons: [
        { name: "umair", age: 10 },
        { name: event.target.value, age: 20 },
        { name: "singh", age: 40 },
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    alert(doesShow);
    this.setState({showPersons: !doesShow});
  }


  render(){
    const style = {
      backgroundColor: 'black',
      color: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){

      persons = (
        <div>
          {this.state.Persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return(
      <div className="App">
      <h1>I am react App</h1>
      <button 
        onClick={this.togglePersonHandler} 
        style={style}>Change State
      </button>
      {persons}
    </div>
    )
  }
}

export default App;
