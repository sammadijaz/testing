import './App.css'
import Todo from './components/todo'
import Heading from './components/heading'
import Popup from './components/popup'
import { useState } from 'react'

function App() {
    
    // useState()
    // making the code reactive now

    const [popupOpen, setPopupOpen] = useState(false);
    // giving 'false' as a default state for 'popupOpen' variable.
   
    // first variable stores the arguement that we passed in useState() as the default value, in our case it is false. 
   
    // second varible stores a function that changes the value of the first variable by accepting arugement example: setPopupOpen(true).

    // console.log(`This is popupOpen: ${popupOpen}`);
    // console.log(`This is setPopupOpen: ${setPopupOpen}`);


  return (
    <>
      
      {/* Task
      create and import heading component */}
      <Heading />
      {/* Done */}

      <div className="inputDiv">
        <label htmlFor="inputTask">Enter your task: </label><br />
        <input type="text" name="inputTask" id="inputTask" onChange = {(event) => {
          console.log(event.target.value);
        }} />
        
        <button type="submit" onClick = {() => {
          setPopupOpen(true)
          // console.log(setPopupOpen);
          }}
          >Make Task</button>
      </div>

      {/* learning about props now */}
      <Todo modifiedTask="Continue React Crash Course" description="Do as much as you can"/>

      <Todo 
      modifiedTask="Commit code"
      description="With a good description"
      />
      <Todo 
      modifiedTask="Push code"
      description="Not much to say here"
      />
      
      {/* Task 
      create popup component and apply styles from google drive*/}
      {/* Task
      make the span in popup dynamic */}
      { popupOpen === true ? <Popup custom="ARE YOU ACTUALLY SURE?!??"/> : null }
      {/* 
      In react if you have 'null' on the second conditon in ternary condition then you can redude the statement with && operator.
      
      Here is reduced version of statment written above:
      { popupOpen && <Popup custom="ARE YOU ACTUALLY SURE?!??"/> }
      */}
      {/* Done */}
      {/* Done */}


    </>
  )
}

export default App
