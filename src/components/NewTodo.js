import React,{useState} from 'react'
import style from './NewTodo.css'

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: '', desc: ''});
    const {title, desc} = todo;
    const handleChange = (event) => {
      const name = event.target.name;
      setTodo((oldTodo) => {
        return {...oldTodo, [name]: event.target.value};
      })
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title: '',desc: ''})
  }
  return (
    <div className='form'>
      <form action="" onSubmit={handleSubmit} >
        <div className='form_field'>
            <label htmlFor="">Title: </label>
            <input onChange={handleChange} value={title} type="text" name="title" id="title" />
        </div>
        <div className='form_field'>
            <label htmlFor="">Description: </label>
            <textarea onChange={handleChange} value={desc} type="text" name="desc" id="desc" />
        </div>
        <button type='submit'>Add todo</button>
      </form>
    </div>
  )
}

export default NewTodo
