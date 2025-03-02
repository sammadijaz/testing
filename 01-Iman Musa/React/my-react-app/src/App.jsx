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

      <Todo />
      <Todo />
      <Todo />
      
      {/* Task 
      create popup component and apply styles from google drive*/}
      <Popup />
      {/* Done */}


    </>
  )
}

export default App
