import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import TodoContext from "./context";

const CustomButton = ({ name, age }) => {
 const{todo,dispatch}=useContext(TodoContext)
 console.log(todo)
  return (
    <>
     <button onClick={()=>dispatch({type:'Add',todo:"aBCCCC"})}>
     <h1 >
     {todo.map((t)=>{
       return   `Hi Myself ${t} and years's old`
     }) }
    </h1>
     </button>
    </>
    
  );
};

export default CustomButton;
