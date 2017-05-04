import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      completed: this.props.completed
    }
  }

  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.onChangeState.bind(this)}/>
        <label style={{'textDecoration': this.textDecoration() }}> { this.props.text } </label>
        <button onClick = {this.onDelete.bind(this)}> Eliminar </button>
      </li>
    )
  }

  onChangeState() {
    this.setState({
      completed: !this.state.completed
    })
  }

  textDecoration() {
    console.log("text")
    return this.state.completed ? 'line-through' : 'none'
  }
  onDelete(){
    this.props.onDeleteToDo(this.props.id)
  }
}

export default Todo
