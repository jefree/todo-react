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
        { this.getRepresentationText() }
        <button onClick = {this.onDelete.bind(this)}> Eliminar </button>
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

  onDoubleClick() {
    this.setState({editing: true})
  }

  onKeyDown(evt) {
    if (evt.which == 13) {
      this.setState({editing:false})
    }
  }

  getRepresentationText() {
    let component

    if (this.state.editing) {
      component =  <input onInput={this.onChangeText.bind(this)} onKeyDown={this.onKeyDown.bind(this)} value= {this.state.text}/>
    }
    else {
      component =  <label style={{'textDecoration': this.textDecoration() }} onDoubleClick={this.onDoubleClick.bind(this)}> { this.state.text } </label>
    }

    return component
  }

  textDecoration() {
    return this.state.completed ? 'line-through' : 'none'
  }

  onDelete(){
    this.props.onDeleteToDo(this.props.id)
  }
}

export default Todo
