import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWothCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const {name, email, password} = formValues;
  
  useEffect( () => {
    console.log('email cambio')
  }, [ email ])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( formValues )
  }

  return (
    <form onSubmit = { handleSubmit }>
      <h1>FormWothCustomHook</h1>
      <hr/>
        <div className="form-group">
          <input
            type="text"
            name= "name"
            className="form-control"
            autoComplete="false"
            value = { name }
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
            value = { email }
            onChange={ handleInputChange }
            placeholder = "tu email"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name= "password"
            className="form-control"
            autoComplete="false"
            value = { password }
            onChange={ handleInputChange }
            placeholder = "*****"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>

    </form>
  )
}
