
import TodoList from "./TodoList";
import './List.css'

const List = (props) => {

    
    
  
    return(
        <div className="List">
            {props.array.map(toDo => <TodoList key={toDo.id} id={toDo.id} nome={toDo.nome} descr={toDo.descr} state = {toDo.state}  />)}
        </div>
    );

}

export default List