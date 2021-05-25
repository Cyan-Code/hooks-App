import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado'
import { useCounter} from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

  const {counter, increment} = useCounter( 100 )
  const [show, setShow] = useState(true)

  const resultadoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHooks</h1>
      <h3>Counter: <small>{ counter }</small></h3>
      <hr />

      <p> { resultadoPesado } </p>
      
      <button
        className="btn btn-primary"
        onClick = { increment }  
      >+1</button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick = { ()=> {
          setShow (!show)
        }}
      >
        Show/HIde { JSON.stringify( show ) }
      </button>

    </div>
  )
}
