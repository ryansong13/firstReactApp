// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom'
var dummyData = [{
  taskText: "Clean house",
  completed: false
},
  {taskText: "Take out trash",
  completed: false
},
  {taskText: "Cook dinner",
  completed: false
},
  {taskText: "Pick up brother",
  completed: false
},
  {taskText: "Call parents",
  completed: false
}]
class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
        {dummyData.map((todo) => (<li><Todo task = {todo}/></li>))}
      </ul>
    )
  }
}

class Todo extends React.Component{
  constructor(props){
    super(props),
    this.state = {
      completed: this.props.task.completed
    },
    this.handleClick.bind(this)
  }
  handleClick(e){
    e.preventDefault();
    this.setState(prevState => ({
      completed: !prevState.completed
    }))
  }
  render(){
    // function handleClick(e){
    //   e.preventDefault();
    //   var newstate = !this.props.task.completed;
    //   this.setState({
    //     completed: newstate
    //   })
    // }
    if(this.state.completed === true){
      return (<div><button onClick = {(e) => this.handleClick(e)}>X</button><strike>{this.props.task.taskText}</strike></div>)
    }else{
      return (<div><button onClick = {(e) => this.handleClick(e)}>X</button>{this.props.task.taskText}</div>)
    }
  }
}

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div><input type = 'text' placeholder = 'Todo...'/><button id = 'addtodo'>Add todo</button></div>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div>
          <InputLine />
        </div>
        <div>
          <TodoList/>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
