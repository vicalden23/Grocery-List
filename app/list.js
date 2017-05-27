import React, { Component } from 'react'

class GroceryListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    )
  }
}

const TodoList = (props) => (
  <div>
    <ul>
      {props.todos.map(function(todo) {
        return <GroceryListItem todo={todo} />
      })}
    </ul>
  </div>
)

const Todo = () => (
  <div>
    <h2>My ToDo</h2>
    <TodoList todos={['apples', 'bananas', 'oranges']} />
  </div>
)

export default Todo