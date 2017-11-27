// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

  constructor(){
    super();

      this.state= {
        task: [1 ,2 ,3 ,4 ,5],
        input:'hola',
        completed: false

      }

  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

// Establish a function that we are going to be passing
// into the Todo Component.

  handleSubmit(e){
    e.preventDefault();
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input:'',
    })
  
  }

  render() {
    console.log(this.state);

    let tasks = this.state.tasks.map((task)=>
          <Todo task={ task } />
    );

    return (
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange= {(event)=> this.handleChange(event)} />
          <input type="submit"/>
        </form> 
      </div>
    );
    
  }
}




export default App;
