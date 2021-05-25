import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const Callbackhook = () => {

  const [counter, setCounter] = useState(10)

  const increment = useCallback( (num) => {
      setCounter(c => c + num)
    }, [setCounter]
  )

  useEffect( () => {
    
  },[ increment ])

  return (
    <div>
      <h1>UseCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment = { increment }/>

    </div>
  )
}
