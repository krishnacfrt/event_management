import React from 'react';
import './List.css';

function List(props) {
    // console.log(props);
  return (
    <div className='conainer'>
     
        <tr>
                    <td > {props.data.name}</td>
                    <td >{props.data.age}</td>
                    <td >{props.data.food}</td>
                    <td >{props.data.contact}</td>
        
        <span><button onClick={()=>props.handleEdit(props.index)}>edit</button>
        <button onClick={()=>props.handleDelete(props.index)}>delete</button></span>
        </tr>
    </div>
  )
}

export default List
