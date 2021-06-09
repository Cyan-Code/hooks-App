import React from 'react'; 
import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"


describe('Pruebas sobre el archivo <TodoAdd />', () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(
    <TodoAdd
      handleAddTodo = {handleAddTodo}
    />
  )

  test('Debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('No debe de llamar el handleTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault(){} })
    expect( handleAddTodo ).toHaveBeenCalledTimes(0)
  })

  test('Debe de llamar la funcion handleAddTodo', () => {
    const value = 'Hello'
    wrapper.find('input').simulate('change', {target: {value, name: 'description'}})
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault(){} })
    expect( handleAddTodo ).toHaveBeenCalledTimes(1)
    expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object)) // ojo
    expect( handleAddTodo ).toHaveBeenCalledWith( {
      id: expect.any(Number),// ojo
      desc: value, 
      done: false
    })
    expect( wrapper.find('input').prop('value')).toBe('')
  })
  
  
  
})

