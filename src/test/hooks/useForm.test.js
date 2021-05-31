import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from '../../hooks/useForm';

describe('Pruebas sobree el useForm', () => {
  const initialForm = {
    name: 'Luis',
    email: 'test@test.com'
  }
  test('Debe de regresar un formulario por defecto', () => {
    const {result} = renderHook( () => useForm(initialForm)) // Aunque mi hook retorne un arreglo el renderHook retorna un objeto
    const [values, handleInputChange, reset] = result.current
    expect( values ).toEqual(initialForm)
    expect( typeof handleInputChange ).toBe('function')
    expect( typeof reset ).toBe('function')
  })

  test('Debe de cambiar el valor del formulario (acambiar solo el name)', () => {
    const {result} = renderHook( () => useForm(initialForm))
    const [ , handleInputChange] = result.current                        
    act(()=>{
      handleInputChange({
        target: {
          name: 'name',
          value: 'Hola'
        }
      })
    })
    const [values] = result.current
    expect(values.name).toBe('Hola')
    expect(values).toEqual({...values, name: 'Hola'})
  })

  test('Debe de reestablecer el formulario con RESET', () => {
    const {result} = renderHook( () => useForm(initialForm))
    const [,handleInputChange,reset] = result.current
    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Hola'
        }
      })
      reset()
    })
    const [values] = result.current
    console.log(values)
    expect( values ).toEqual(initialForm)
  })
  
  
  

})
