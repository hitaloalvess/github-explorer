import { useState } from "react";

const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    function increment(){
         setCounter( counter + 1);   
    }
    
    return ( 
        <div className="container">
            <h3 className="counter">{counter}</h3>
            <button onClick={increment}>
                Incrementar
            </button>
        </div>
     );
}
 
export default Counter;