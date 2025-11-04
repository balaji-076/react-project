import{ useState } from 'react';
export default function AddTaskForm({ addTask }: { addTask: (task: FormDataEntryValue | null) => void }) {
    const [value, setValue] = useState<string>('');
    const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const task = formData.get("task");
        if(!task || String(task).trim() === ''){
            console.log(String(task).trim());
            return;
        }
        addTask(task);
        console.log("Task Added:",task);
        setValue('');
    }
        
    return(
        <>
            <form className='heading' action="" onSubmit={handleFormSubmit}>
                <input type="text" name="task" style={{marginRight:"10px"}} onChange={(e)=>setValue(e.target.value)} value={value} />
                <button className="addTaskbtn">Add</button>
            </form>
        </>
    );
}