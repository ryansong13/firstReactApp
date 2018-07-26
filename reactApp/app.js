// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom'
var dummyData = ["Clean house", "Take out trash", "Cook dinner", "Pick up brother", "Call parents"]
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
    super(props)
  }
  render(){
    return(
      <div><button>X</button>{this.props.task}</div>
    )
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
