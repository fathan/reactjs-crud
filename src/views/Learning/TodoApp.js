import React, { Component } from 'react'
import TodoList from './TodoList'


export class TodoApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <h3>TODO APP</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <br/>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    }

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }
}

export default TodoApp
