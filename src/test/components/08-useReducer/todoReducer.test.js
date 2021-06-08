import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';



describe('Pruebas en todoReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {})
    expect( state ).toEqual( demoTodos )
  })
  test('Debe de agregar un Todo', () => {
    const newTodo = {id: 3, desc: 'hola', done: false}
    const add = {
      type: 'add',
      payload: newTodo
    }
    const state = todoReducer(demoTodos, add)
    expect( state ).toEqual ([...demoTodos, newTodo])
  })
  test('Debe de borrar un TODO', () => {
    const todo = {id: 1}
    const delet = {
      type: 'delete',
      payload: todo.id
    }
    const state = todoReducer(demoTodos, delet)
    expect( state.length ).toBe (1)
    expect( state ).toEqual( [demoTodos[1]] )
  })
  test('Debe de tooglear un TODO', () => {
    const done = {id:2}
    const toggle = {
      type: 'toggle',
      payload: done.id
    }
    const state = todoReducer(demoTodos, toggle)
    expect( state[1].done ).toBe(true)
  })

  
})

