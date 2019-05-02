import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      instructors: [
          {
            name: 'Tim',
            hobbies: ['sailing', 'react']
          },
          {
            name: 'Matt',
            hobbies: ['math', 'd3']
          },
          {
            name: 'Colt',
            hobbies: ['css','hiking']
          },
          {
            name: 'Elie',
            hobbies: ['music','es2015']
          }
        ]
    };
    
    setTimeout(()=> {
      let randInstructor = Math.floor(Math.random() * Math.floor(this.state.instructors.length));
      let randHobby = Math.floor(Math.random() * Math.floor(this.state.instructors[randInstructor].hobbies.length));
      console.log(`instructor: ${randInstructor}\nhobby: ${randHobby}`);
      const instructors = this.state.instructors.map((inst, i)=>{
        if(i === randInstructor){
          const hobbies = [...inst.hobbies];
          hobbies.splice(randHobby,1);
          return {
            ...inst,
            hobbies
          }
        }
        return inst;
      });
      this.setState({instructors});
    }, 5000)
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
        <li key={index}>
          <h3>{instructor.name}</h3>
          <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
        </li>
      ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
