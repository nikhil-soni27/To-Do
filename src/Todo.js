import {React,useState} from "react";
const Todo=()=>{
    const[input,setInput]=useState('');
    const[todos,setTodos]=useState([])
    const [id, setId] = useState(0);
    const submitHandler=(e)=>{
        e.preventDefault();
    }

    const listofItems=()=>{
        
        setTodos((old)=>{
            return[...old,{
                input, id
            }]
        })
        setId(id + 1)
    }

    const deleteHandler=()=>{
      setTodos([])
    }
    const deleteItems=(id)=>{
        let newTodo=todos.filter((todo)=>todo.id!==id)
        setTodos(newTodo)
    }
 
    return(
        <div className="nikhil"> 
        <form  onSubmit={submitHandler}>
        <input type='text'onChange={(e)=>{setInput(e.target.value)}}></input>
        <span>

        <button className="btn" type="submit"  value="submit"  onClick={listofItems}>Add</button>
        <button type="reset" className="btn"  onClick={deleteHandler}>Clear All Tasks</button>

        </span>

    </form>
    <ol>
    {todos.map((todo)=>{
        return <li> {todo.id} {todo.input}  <i className="fa fa-times" onClick={()=>deleteItems(todo.id)}></i></li>
    })}
</ol>
    </div>)
}


export default Todo;