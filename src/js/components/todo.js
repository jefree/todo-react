import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      completed: this.props.completed,
      text: this.props.text
    }
  }

  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.onChangeState.bind(this)}/>
        <label style={{'textDecoration': this.textDecoration() }}> { this.state.text } </label>
        <button onClick = {this.onDelete.bind(this)}> Eliminar </button>
        <input onInput={this.onChangeText.bind(this)} value= {this.state.text}/>
      </li>
    )
  }

  onChangeText(event) {
    this.setState({
      text: event.target.value
    })
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
