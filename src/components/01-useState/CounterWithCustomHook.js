import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../01-useState/counter.css'

export const CounterWithCustomHook = () => {

  const {state, increment, decrement, reset} = useCounter(100);
  return (
    <div>
      <h1>CounterWithCustomHook: { state }</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick = {() => increment()}
      > +1 </button>

      <button
        className="btn btn-primary"
        onClick = { reset }
      >Reset Counter</button>

      <button
        className="btn btn-primary"
        onClick = {() => decrement()}
      > -1 </button>
    </div>
  )
}
