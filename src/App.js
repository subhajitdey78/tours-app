import React, { useReducer, useState } from "react";
import "./App.css";

function App() {
 // const [count, setCount] = useState(0);

 const Actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  
 }

 function reducer(state, action) {
  console.log(action);
     switch (action.type) {
    case Actions.INCREMENT:
      return {count: state.count + 1};
   case Actions.DECREMENT:
      return { count: state.count - 1};
    default:
      return state;
    }
 }

 const initialState = { count: 0 };
const [state, dispatch] = useReducer(reducer, 
initialState);




  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: "increment"});
  };

  

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: "decrement"});
  };

  
  return (
    <div className="app">
      <h1>Counter App</h1>
      <div>
        <button onClick={decrement}>-</button>
       <span>{state.count}</span>
       <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;