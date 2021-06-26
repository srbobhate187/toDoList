import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './ToDo.css';
import LiComp from './LiComp';
function Todos(){
  const[item, setItem] = useState('')
  const[newitem, setNewItem] = useState([]);
  const itemEvent = (event) =>{
    return(
      setItem(event.target.value)
      
    

    )
  }
  const listItems = () =>{
    setNewItem((prev) =>{
      return[...prev,item]

    })
    setItem('')

  }

  return (
    <>
      <div className = "main">
        <div className = "center">
          <h1>To Do List</h1>
          <input type = "text"
          
          value = {item}
          placeholder = "add"
          onChange = {itemEvent}/>
          <Button className = "btn" onClick = {listItems}><AddIcon className = "add"/></Button>
          <br/>
          <ol>
            
            {newitem.map((val,index) =>{
              return(
                <LiComp key = {index}text = {val}/>
              )


            })}
          </ol>
          <br/>
        </div>
      </div>

     
    </>
  )
}
export default Todos;