import React,{useState} from 'react';
import './ToDo.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';




const ToDo = () => {
  const[todos, setTodos] = useState([])
  const [todo, setTodo] = useState('');
  function submitHandler(e){
    e.preventDefault()
  }
    const newTodo = {
      id : new Date().getTime(),
      text : todo,
      completed : false,
    }
    setTodos([...todos].concat(newTodo))
    setTodo('')
  }
  function deleteToDo (id){
     const updatedToDo = [...todos].filter((todo) =>todo.id != id )
     setTodos(updatedToDo)
  }
  
   
  
  return(
    
    <div className = "todo">
      <form onSubmit = {submitHandler}>
        <input type = "text" onChange = {(e) => setTodo(e.target.value)}
        value = {todo} />
        <Button type = "submit" >Add</Button>
      </form>
      {todos.map((todo)=><div key = {todo.id}><div>{todo.text}</div>
      <button onClick = {() =>deleteToDo(todo.id)}>Delete</button>
      <input type = "checkbox" onChange =""/>
      </div>)}
    </div>
   
  )
}

export default ToDo;