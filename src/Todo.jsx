import { useState } from "react";

function Todo(){
    const[task,settask]= useState(['Eat', 'Play', 'Repeat']);
    const[newtask, setnewtask]= useState('');

    function handleinputchange(event){
        setnewtask(event.target.value)
    }
    function addtask(){
        if(newtask.trim()!==''){
            settask(t =>[...t, newtask])
            setnewtask('')};    
    }
    function deletetask(index){
        settask((task.filter((_,i)=> i!==index)))
    };

    return(
    <div>
        <div className='todo-container'>
            <h1>Todo List</h1>
            <input className='input-bar' type="text" placeholder="Enter a task" onChange={handleinputchange} value={newtask}></input>
            <button className="add-button" onClick={addtask}>Add</button>
        </div>
        <ul>
            {task.map((t,index)=>
            <li key={index} >
                <span className="text"onDoubleClick={()=> deletetask(index)} >
                {t}
                </span>
            </li>
            )}            
        </ul>
    </div>
    );
}
export default Todo