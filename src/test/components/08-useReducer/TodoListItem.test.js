import React from 'react';
import { shallow } from "enzyme"
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"

describe('Pruebas en el componente <TodoListItem />', () => {
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <TodoListItem
      todo = {demoTodos[0]}
      index = {0}
      handleDelete = { handleDelete }
      handleToggle = { handleToggle }
    />
  )
  
  test('Debe de mostrar el componente correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('Debe de llamar la funcion Borrar', () => {
    wrapper.find('button').simulate('click')
    expect( handleDelete ).toHaveBeenCalledWith(1)
  })

  test('Debe de llamar la funcion handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect( handleToggle ).toHaveBeenCalledWith(1)
  })
  
  test('Debe de mostrar el texto correctamente', () => {    
    const parrafo = demoTodos[0].desc
    expect( wrapper.find('p').text().trim() ).toBe(`${demoTodos[0].id}: ${parrafo}`)
  })

  test('Debe de tener la clase complete si el done esta en true', () => {

    const todo = demoTodos[0]
    todo.done = true
    const wrapper = shallow(
      <TodoListItem
        todo = {todo}
        index = {0}
      />
    )
    const toggle = 'complete'
    expect( wrapper.find('p').hasClass(toggle) ).toBe(true)
    
  })
  
  
})

