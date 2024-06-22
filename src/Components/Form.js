import React,{useState} from 'react';
import './Form.css';

function Form(props){
    const [name, setName]=useState('');
    const [age, setAge]=useState(0);
    const [contact,setContact]= useState(0);
    const [food,setFood]= useState('veg');
    return (
        <div className='form-container'>
            <form onSubmit={(e)=>{
                    e.preventDefault();
                    props.handleSubmit(name,age,contact,food,props.update, props.idx);}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <label for='name'>Name </label>
                <input type='text' placeholder= "name" onChange={e=>setName(e.target.value)} ></input>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <label for='age'>Age   </label>
                <input type='text' placeholder= 'Age' onChange={e=>setAge(e.target.value)}></input>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <label for='phone'>Phone  </label>  
                <input type='text' placeholder= 'Phone no' onChange={e=>setContact(e.target.value)}></input>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <label for='phone'>Choose Your Menu </label>
                <select id ='food' onChange={e=>setFood(e.target.value)}>
                    <option value=''>select</option>
                    <option value='Veg'>Vegetarian</option>
                    <option value='NonVeg'> Non-Vegetarian</option>
                    <option value='NonVeg'> Omnivorous</option>
                </select>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <button type='submit' >Add</button>
                </div>
                
                
            </form>
        </div>
    )
}
export default Form;