import React from 'react'
import './ToDo.css';


const Form = () =>{
  const addItem =(e)=>{
    return(
      e.preventDefault(),
      console.log('Hello World')
    )
  }
  
  return(
    <div className = "todo">
      <input type = "text" className = "todo-input" placeholder="Task" onChange=/>
       <button onClick={addItem} type="submit"> Add Task </button>
    </div>

  )
}

export default Form;