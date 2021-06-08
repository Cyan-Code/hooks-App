import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = React.memo(({todos, handleDelete, handleToggle}) => {
  return (
    <ul className = "list-group list-group-flush">
      {
        todos.map ( (todo, i) => (
          <TodoListItem
            todo = {todo}
            key = { todo.id }
            index = { i }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
          />
        ))
      }
    </ul>
  )
})

TodoList.proptype = {
  todos: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}
