import { useState } from 'react';
import './TodoList.css'
const TodoList = (props) => {

    


    const [isValid,setValid] = useState(props.state)

    function showAlert() {
        alert('Description: ' + props.descr)
    }
    function changeState() {
        setValid(!isValid)
    }


   
    return(
        <div className='classInLine' >
            <div className={`formToSend ${isValid ? 'invalid' : ''}`}>
            <input type="checkbox" onChange={changeState}/>
            <label onClick={showAlert}>{props.nome}</label>
            </div>
        </div>
    );
}

export default TodoList