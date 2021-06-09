import { shallow } from 'enzyme';
import React, {useContext} from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas sobre el componente <LoginScreen />', () => {
  
  const setUser = jest.fn()

  const wrapper = nount(
    <UserContext.Provider value = {{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  )

  test('Debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('Debe ejecutar el setUser con el argumento esperado', () => {
    wrapper.find('button').prop('click')()
    expect( setUser ).toHaveBeenCalledWith({
      id: 123,
      name: 'Luis'
    })
  })
  
  
})


