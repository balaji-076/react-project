import { useState } from "react";

export default function EventHandlingConcept() {
    const[count,setCount] = useState(0);
console.log("EventHandlingConcept rendered");
    return (
    <>   
        <div>EventHandlingConcept</div>
        <div>count : {count}</div>
        <button onClick={()=>setCount(count+1)}>click to increase</button>
        <br /><br />
        input value : <input type="text" onChange={(e)=>console.log(e)} />
    </>
);
}