import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50
  })
  // aqui solo obtenemos con desestructuracion el primer y segundo valor
  const {counter1, counter2} = state;
  return (
    <div>
      <h1>Counter { counter1 }</h1>
      <h1>Counter { counter2 }</h1>
      <hr />
      <button 
        className="btn btn-primary" 
        onClick = { () => {
          setState( {
            // aqui el spread nos ayuda a mantener la referencia del state logrando modificar solo la primera propiedad
            ...state,
            counter1: counter1+1
          })
        } }
      > 
        +1
      </button>
    </div>
  )
}
