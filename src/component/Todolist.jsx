import {useState} from "react";

const Todolist = () => {
    const [task, setTask] = useState("");
const [todos, setTodos] = useState([]);

const handleAdd=()=>{
    if(!task){
        alert("Please enter a task ! ")
    }else{
        setTodos([...todos, task]);
        setTask("");
    }
}

// -------LAST TASK DELETE ---------
// const handleDelete=()=>{
//     if(todos.length === 0){
//         alert("No tasks to delete !");
//     }else{
//         setTodos(todos.slice(0, -1));
//     }
// }

const handleDelete=(index)=>{
    const newTodos = todos.filter((todo, i) => {
  return i !== index;
});

setTodos(newTodos);
}

  return (


    <div className="flex justify-center items-center min-h-screen bg-green-200" >
    
      
    <div className=" bg-white border rounded-2xl border-green-200 p-10 flex flex-col justify-center items-start gap-5 ">
        <label htmlFor="task" >Enter Task: </label>
        <input type="text"   
        className="border border-black p-2 rounded-xl"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        ></input>



<div className="flex gap-4">
  <button
    className="bg-green-100 px-4 py-4 rounded-xl font-bold"
    onClick={handleAdd}
  >
    Add Task
  </button>


</div>

        <h1 className="underline"> Task List </h1>

<ol className="list-decimal pl-5">
  {todos.map((todo, index) => (
    <li key={index}>
      <div className="flex justify-between items-center gap-6">
        <span>{todo}</span>

        <button onClick={() => handleDelete(index)}>
         🗑 Delete
        </button>
      </div>
    </li>
  ))}
</ol>
        
    </div>
    </div>
  )
}

export default Todolist
