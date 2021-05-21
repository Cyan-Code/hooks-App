import React, { useEffect, useState } from 'react'
import { Message } from './Message'

import './effects.css'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState;

  useEffect( () => {
    console.log('only')
  }, [] )
  useEffect( () => {
    console.log('only form')
  }, [formState] )
  useEffect( () => {
    console.log('only email')
    // ya se encuentra desestructurado arriba
  }, [email] )
  // Extraemos el target del evento (event.target)
  const handleInputChange = ( {target} ) => {    
    console.log(target.name)
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }
  
  return (
    <>
      <h1>useEffect</h1>
      <hr/>
        <div className="form-group">
          <input
            type="text"
            name= "name"
            className="form-control"
            autoComplete="false"
            onChange={ handleInputChange }
            placeholder = "tu nombre"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name= "email"
            className="form-control"
            autoComplete="false"
            onChange={ handleInputChange }
            placeholder = "tu email"
          />
        </div>

        {( name === '123') && <Message /> }

    </>
  )
}
