import React from 'react';
import { shallow, nount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';


describe('Pruebas sobre el componente <TodoApp />', () => {
  const wrapper = shallow(<TodoApp />)

  test('Debe renderizar de manera correcta', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('Debe de agregar un todo', () => {
    const wrapper = nount(<TodoApp />)
  })
  

})


