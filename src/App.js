import React, { Component } from 'react';
import './App.css';
import Person from './Persons/Person';


class App extends Component{
  state = {
    Persons : [
      { name: "uzair", age: 28 },
      { name: "ali", age: 30 },
      { name: "khan", age: 60 },
    ]
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

  render(){
    return(
      <div className="App">
      <h1>I am react App</h1>
      <button onClick={this.switchNameHandler.bind(this,'almeer')}>Change State</button>
      <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} click={this.switchNameHandler.bind(this,'ayaat')}/>
      <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age} change={this.nameChangeHandler}>My Hobbies: Racing</Person>
      <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age} />
    </div>
    )
  }
}

export default App;
