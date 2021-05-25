import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
  const [state, setState] = useState({data: null, loading: true, error: null})

  const isMounted = useRef(true) //

  useEffect( () => { // Cuando este efecto se desmonte, cambia el estado de referencia
    return () => { // no re-renderiza el componente, simplemente mantiene una referencia
      isMounted.current = false // basicamente, es falso cuando deja de existir
    }
  }, [])

  useEffect( () => {

    setState({data: null, loading: true, error: null})

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {
        if (isMounted.current) {
          setState ({ // gracias a las validaciones antes hechas con el use ref, se puede hacer
            loading: false, // un trabajo condicional con este componente, ya que se puede
            error: null, // trabajar de manera segura si esta montado, y no necesariamente montarlo
            data // y llamar el useState, si no se encuentra montado
          })
        }  
      })
  }, [url])

  return state
}
