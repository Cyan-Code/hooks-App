import { shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas sobre el componente <HomeScreen />', () => {
  
  const user = {
    name:'Luis',
    email: 'luis@luis.com'
  }

  const wrapper = shallow(
    <UserContext.Provider value = {{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>
  )
  test('Debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
})


