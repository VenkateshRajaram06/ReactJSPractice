import React, { Component } from 'react';
import Todos from './Components/Todos';
import Header from './layout/Header';

class App extends Component {
  
  state={
    todos:[
      {
        id:1,
        title:'C++',
        completed:false
      },
      {
        id:2,
        title:'JAVA',
        completed:false

      },
      {
        id:3,
        title:'C#',
        completed:false

      }
    ]
  }
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    })});
  
  }

  delTodo=(id)=>{
    this.setState({
      todos:[...this.state.todos.filter(todo=>todo.id!==id)]
    })
  }
  render (){
    console.log('State====>'+this.state.todos);
    return(     
      <div className="App">
      <Header></Header>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
    );
  }
}

export default App;
