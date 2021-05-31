import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {

  test('Debe de retornar la info por defercto', () => {
    const { result } = renderHook ( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`))
    const {data, loading, error} = result.current
    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe(null)

  })
  test('Debe tener la info deseada, loading en false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook ( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`))
    await waitForNextUpdate({timeout:3000}) //mirar que pasa sin eso
    const {data, loading, error} = result.current
    expect(data.length).toBe(1)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })
  test('Debe de manejar el error', async () => {
    const { result, waitForNextUpdate } = renderHook ( () => useFetch(`https://reqres.in/apsi/usersasa?page=3`))
    await waitForNextUpdate({timeout:3000}) //mirar que pasa sin eso
    const {data, loading, error} = result.current
    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe('No se pudo generar la info')
  })
  
})
