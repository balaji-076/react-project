import { useEffect, useState } from "react";
import axios from "axios";
import ProbsConcept from "./core-concepts/probs-concept";
import StateConcept from "./core-concepts/state-concept";
import EventHandlingConcept from "./core-concepts/event-handling";
import SampleFormEventExample from "./core-concepts/sampleform-event-example";
import TaskManagerConcept from "./core-concepts/task-manager/task-manager-concept";

type Product = {
  id: number;
  name: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [color, setColor] = useState<string>("black");

  useEffect(() => {
    axios.get<Product[]>("http://127.0.0.1:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const [name, setName] = useState("Balaji");
  const [isVisible, setIsVisible] = useState(false);

  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const addFruit = () => {
    setFruits([...fruits, "Orange"]); // old array + new item
  };

return (<TaskManagerConcept/>); 

  return (
    <div>
      <input value={name}  onChange={(ex) => setName(ex.target.value)} />
      <p>Hello, {name}!</p>

      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Now you can see me!</p>}

      <div>
        <h3>Fruits:</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <button onClick={addFruit}>Add Orange</button>
      </div><br></br>

      <SampleFormEventExample/>
      <EventHandlingConcept/><br /><br />
      <ProbsConcept/>
      <StateConcept />
      <TaskManagerConcept/>
      <h1>Products</h1>
      <button style={{color:color}}>{color}</button>
      <button type="button" onClick={()=>setColor("red")} >click to change red</button>
      <ul>
        {products.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
