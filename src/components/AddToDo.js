import { useState } from "react"

import './AddToDo.css'

const AddToDo = (props) => {
   
const [newText,setNewText] = useState('');
const [newDescr,setNewDescr] = useState('');


function changeNewDescr(event) {
    setNewDescr(event.target.value)
}
function changeNewText(event) {
    setNewText(event.target.value)
}
const sendInformation = (event) =>{
    event.preventDefault();
    const object = {
        id:Math.random().toString(),
      nome: newText,
      descr: newDescr,
      state: false
    };

    props.OnSave(object);
    setNewText('');
    setNewDescr('');
    
  }

return(
    <form onSubmit={sendInformation}>
        <div>
        <p>Name</p>
        <input type="text" value={newText} onChange={changeNewText}></input>
        <p>Description</p>
        <input type="text" value={newDescr} onChange={changeNewDescr}></input>
        </div>
        <button type="submit" className="buttonAddToDo"></button>
    </form>
)

}
export default AddToDo