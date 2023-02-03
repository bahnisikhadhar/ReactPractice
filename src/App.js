import { useState } from "react";
import Goal from "./Goal";
import ComponentA from "./ComponentA";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const arr = [{name: "bahni",color : "orange"},{name: "sikha",color : "green"},{name: "bun",color : "yellow"}];

  function handleToggle(){
  return setIsVisible(!isVisible);
}


  return (
    <div className="App">
      <Goal isGoal={false} /> 
      
      {
        (isVisible) && 
        arr.map((item)=>
          <ComponentA name = {item.name} color = {item.color} key={item.name}/>
        )
      }
      
      <button onClick = {handleToggle}>Toggle</button>
    </div>
  );
}

export default App;
