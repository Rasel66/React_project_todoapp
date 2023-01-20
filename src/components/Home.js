import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';

import Todos from './Todos'
import style from './Home.css'
import NewTodo from './NewTodo'
const Home = () => {
  const [todos, setTodos] = useState([])
  const handleAddTodo = (todo) =>{
    setTodos((previousTodo) =>{
      return [...previousTodo, {id: uuidv4(),todo}];
    })
  }
  const handleRemove=(id) =>{
    const filteredTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(filteredTodos);
  }
  return (
    <div className='container'>
      <h1 style={{color: "white"}}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemove}/>
    </div>
  )
}

export default Home
