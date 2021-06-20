import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Registry(){
  const [registryData, setRegistryData] = useState([])
  const [textInput, setTextInput] = useState("")
  const [error, setError] = useState(false)

  const addItem  = (e)  => {
    e.preventDefault();
    if(error) return;


    const tempData = [...registryData];
    tempData.push(textInput)
    setRegistryData(tempData)
    setTextInput("")
  }

  useEffect(() => {
    if(textInput.length > 10) setError(true);
    else setError(false)
  }, [textInput])

  const removeItem = (index) => {
    let newData = [...registryData]
    newData.splice(index, 1)
    setRegistryData(newData)
  }

  const editItem = (index) => {
    if(error) return;

    let newData = [...registryData]
    newData[index] = textInput;

    setRegistryData(newData)
  }


  console.log(registryData)

    return (
        <div>
         <h1>Super page</h1>

         <Link to="/">Click here to go to home</Link>
         <br></br>

         <Link to="/weather">Click here to go to weather</Link>


         <form onSubmit={addItem}>
            <label>Please, input a city: 
              <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value) }></input>
            </label>
            <input type="submit" value="Submit"/>
         </form>
         {error ? <span style={{color: "red"}}>Error occured</span> : null}
         {
           registryData.map((item, index) =>{
             return (
               <li key={index}>{item} <button onClick={() => removeItem(index)}>Remove</button><button onClick={() => editItem(index)}>Update</button></li>
             )
           } )
         }
        </div>
      )
}

export default Registry;
