import React from 'react';
import './Person.css';


const person = (props) => {
return (
    <div className="Persons">
    <p onClick={props.click}>My name is {props.name} and i am {props.age} years old.</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change}/>
    </div>
)
}

export default person;