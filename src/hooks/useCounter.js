import { useState } from "react"

export const useCounter = (inicialState = 10 ) => {

  const [state, setState] = useState(inicialState)

  const increment = (factor = 2) => {
    setState( state + factor )
  }

  const decrement = (factor = 2) => {
    setState( state - factor)
  }

  const reset = () => {
    setState( inicialState )
  }
  
  return {
    state,
    increment,
    decrement,
    reset
  }

}
 