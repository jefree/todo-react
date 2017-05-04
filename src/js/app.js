import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Todo from './components/todo'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      todos: [
        { text: "Comprar Comida", completed: false, id: 1 },
        { text: "Consumir Comida", completed: false, id: 2 },
        { text: "Hacer wowo", completed: false, id: 3 },
        { text: "Hacer limpieza", completed: false, id: 4 },
      ]
    }
  }



  render() {
    return (
      <div> 
        <ul>
          { 
            this.state.todos.map((todo, index) => {
              return <Todo 
                key={todo.text + index}
                text={todo.text}
                id={todo.id}
                onDeleteToDo = {this.onDelete.bind(this)}
                completed={todo.completed}/>
            })
          }
        </ul>
      </div>
    )
  }
  onDelete(id){
    let newTodos = this.state.todos.filter(todo=>{
      return todo.id != id
    })
    this.setState({
      todos: newTodos
    })

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
