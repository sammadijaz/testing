import './App.css'
import Todo from './components/todo'
import Heading from './components/heading'
import Popup from './components/popup'

function App() {

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
        
        <button type="submit">Make Task</button>
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
      {/* <Popup custom="ARE YOU ACTUALLY SURE?!??"/> */}
      {/* Done */}
      {/* Done */}


    </>
  )
}

export default App
