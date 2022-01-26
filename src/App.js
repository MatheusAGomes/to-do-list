import { useState } from 'react';
import List from './components/List'
import AddToDo from './components/AddToDo';

import './App.css'

function App() {
  const arr = []

  const [toDo,setToDo] = useState(arr)

  function saveFunction(object) {
    
    let newText = [object ,...toDo];
    setToDo(newText)
  }
  
 
  return (
   <div>
     <h1>Add Task</h1>
     <AddToDo OnSave={saveFunction}></AddToDo>
     <List array={toDo} />
   </div>
  );
}

export default App;
