import { useState } from "react"

const AddToDos = ()=>{
const [inputValue ,setInputValue] =useState("")
const [todo, setTodo] = useState([])
console.log()

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        if(inputValue.trim()==="")return;
console.log(inputValue ,"asjdg")
        setTodo([...todo ,{id:Date.now(), text:inputValue}])
        setInputValue('')
    }
    

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }
   
    const onDeleteClick =(id)=>{
    
        setTodo(todo.filter((todo) => todo.id !== id));
    }
    const onClearhandel =()=>{
setTodo([])
    }
    return (

        <>
        <div>
            <h1>Add Task</h1>
      <form onSubmit={handleFormSubmit}>
        <textarea id="w3review" name="w3review" rows="4" cols="50" value={inputValue} onChange={handleInputChange} >
</textarea>
        <button type="submit">Add Todo</button>
        <button type="submit" onClick={onClearhandel}>Clear All</button>
        

      </form>
      <ul>
        {todo.map((todo) => (
            <>
            <div style={{display:"flex" ,justifyContent:"center",marginTop:"10px"}}>
          <li style={{listStyle:"none"}}key={todo.id}>{todo.text}</li>
          <button style={{marginLeft:"10px", }} onClick={ ()=>onDeleteClick(todo.id)}type="submit">Delete Todo</button>
          </div>
          </>
        ))}
      </ul>
    </div>
        </>
    )
}

export default AddToDos