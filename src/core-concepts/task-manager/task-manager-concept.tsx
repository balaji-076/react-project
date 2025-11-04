import { useState } from 'react'
import './task-manager.css'
import AddTaskForm from './addTask-form';

type Task = {
    id: number;
    text: string;
    completed: boolean;
};

export default function TaskManagerConcept() {
    const [tasks, setTask] = useState<Task[]>([]);

    const addTask = (text: string) => {
        const newTask: Task = { id: Date.now(), text, completed: false };
        setTask([...tasks, newTask]);
    }

    const togglelTask = (id:number)=>{
        setTask(tasks.map((task)=>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    }

    const deletelTask = (id:number)=>{
        setTask(tasks.filter((task)=>task.id !== id));
    }
    return (
        <div className='headDiv'>
            <h1 className='heading'>Task Manager Concept</h1>
            <AddTaskForm addTask={(t) => addTask(t == null ? '' : String(t))}/>
            <ul>    
                {tasks.map((task)=>(
                    <li className='taskList' style={{ display: "flex", justifyContent: "space-between", 
                        alignItems: "center",textDecoration: task.completed ? "line-through" : "none",
                        border: task.completed ? "2px solid #6dd453ff" : "2px solid #c97b7b" }} key={task.id}>
                    <span onClick={()=>togglelTask(task.id)}>{task.text}</span>
                     <span onClick={()=>deletelTask(task.id)}>
                        <svg className="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt"><path fill="#6563FF" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>    
                    </span>           
                    </li>
                    
                ))}
            </ul>
            <p>{tasks.length}</p>
        </div>
    )
}