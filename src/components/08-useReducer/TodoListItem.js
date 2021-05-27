import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = React.memo(({todo, index, handleDelete, handleToggle}) => {
  console.log('me renderizo')
  return (
    <div>
      <li
        key = { todo.id }
        className = "list-group-item"
      >
        <p
          className = { `${ todo.done && "complete" }` }
          onClick = { () => handleToggle(todo.id)}
        >
          { index + 1 }: { todo.desc }
        </p>
        <button
          className="btn btn-danger"
          onClick = { () => handleDelete(todo.id) }
        >
          Borrar
        </button>
      </li>
    </div>
  )
})

TodoListItem.proptype = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}

