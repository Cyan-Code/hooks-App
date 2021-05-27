
const initialState = [{
  id: 1,
  todo: 'Comprar un pan',
  done: false
}] // Estado inicial de mi reducer, un objeto con estas caracteristicas

const todoReducer = ( state = initialState, action ) => { // Definicion de reducer que recibe dos parametro, estado / accion

  if (action?.type === 'agregar') { // pregunta si la accion existe, y si lo hacee, solo agrega el estado anterior y retorna el nuevo estado
    return [...state, action.payLoad] // el nuevo estado debe ser siempre del mismo tipo, aqui, ya queda aniadido
  }

  return state // aqui retorna el nuevo estado
}

let todos = todoReducer() // aqui almacenamos el retorno de nuestra funcion reducer

const newTodo = { // objeto de prueba para agregar un nuevo todo
  id: 2,
  todo: 'Comprar leche',
  done: false
}

const action = { // accion predeterminada, pasada como segundo parametro para nuestra funcion reducer, la cual tiene estos dos
  type: 'agregar', // parametros como estandar, el segundo sobre todo, sirve para cargar el nuevo valor del estado
  payLoad: newTodo
}

todos = todoReducer(todos, action) // invocamos la funcion y le pasamos el estado anterior y luego la action, que 
                                   // es la que representa el tipoy la valor del nuevo estado 

console.log(todos)
