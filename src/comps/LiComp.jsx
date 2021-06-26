import React from 'react'
import './ToDo.css'
import DeleteIcon from '@material-ui/icons/Delete';
const LiComp = (props) =>{
  return(
    <div className = "todo_style">
      <span><DeleteIcon className = "del" title = "delete"/></span>
      
      <li>{props.text}</li>
      
    </div>
    
  )
}
export default LiComp;