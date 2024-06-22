import React, { useState,useEffect } from "react";
import Form from "./Components/Form";
import "./App.css";
import List from "./Components/List";

function App() {
  const [flag, setFlag] = useState(false);
  const [arr, setArr] = useState(!localStorage.getItem('Data')?[]:JSON.parse(localStorage.getItem('Data')));
  const [id, setId] = useState(0);
  const [idx, setIdx] = useState(0);
  const [update, setUpdate]=useState(false);
  function handleSubmit(name, age, contact, food,updateFlag,idx) {
    if (name === "" || age === 0 || contact === 0) {
     ( alert("please fill all the fields correctly"));
     return 
    } else {
      const newArr = [...arr];
      const newObj = {
        id: id,
        name: name,
        age: age,
        contact: contact,
        food: food
      };
      console.log(updateFlag);
      if (!updateFlag)
     { 
      newArr.push(newObj);
      setArr(newArr);
      setId(id + 1);
      setFlag(false);
      name = "";
      age = 0;
      contact = 0;
      
    }
      else{
        newArr[idx]=newObj;
        console.log(newObj)
        console.log(newArr);
        setArr(newArr);
        setFlag(false);
        name = "";
        age = 0;
        contact = 0;
        setUpdate(false);
      }
      //  saveData();
      }
      
  }
  function handleDelete(idx){
   let newArr=[...arr];
   newArr.splice(idx,1);
   setArr(newArr);

  }
  function handleEdit(idx){
    
    setUpdate(true);
    setIdx(idx);
    
  }
 
useEffect(  function saveData(){
    (localStorage.setItem('Data',JSON.stringify(arr)));
    console.log(arr)
    console.log(JSON.parse(localStorage.getItem('Data')));
  },[arr])

  return (
    <> {!update?
      <div className="container">
        <div className="board">
          {!flag ? (
            <>
            
            <div className="guestDetail">
            <h2>Guest Details</h2>
              <table>
                  <tr>
                    <th >Name</th>
                    <th >Age</th>
                    <th >Food</th>
                    <th >Contact</th>
                    
                  </tr>
                  </table>
              <div >
                {(arr).map((item, idx) => {
                  return (
                    <div>
                      <List data={item} index={idx} handleDelete={handleDelete} handleEdit={handleEdit} /> 
                    </div>
                  );
                })}
              </div>
              </div>
              <div className="buttonDiv">
                <button onClick={() => setFlag(true)}> Add Guest</button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Form handleSubmit={handleSubmit} />
            </>
          )}
        </div>
      </div>:
       <div> 
        <div className="board">
        <Form handleSubmit={handleSubmit} update={update} idx={idx}/>
        </div>
        </div>}
    </>
  );
}
export default App;
