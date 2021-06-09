import { shallow, nount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas sobre el componente <AppRouter />', () => {

  const user = {
    id: 1,
    name: 'Luis'
  }

  const wrapper = nount(
    <UserContext.Provider value = {{user}}>
      <AppRouter
      />
    </UserContext.Provider>
  )
  
  test('Debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
})


