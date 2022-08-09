import logo from "./logo.svg";
import "./App.css";
import { useReducer, useRef, useState } from "react";
import Child from "./Child";
import ListGRoup from "./Form/ListGroup";
import InputComponent from "./Form/InputComponent";
import { TodoContext } from "./Context/Context";
import "./App.css";
import reducer from "./Context/reducer";



function App() {
  // const [myList, setMyList] = useState([]);
  const[myList,dispatch]=useReducer(reducer,[])
  console.log(myList);
  return (
    <TodoContext.Provider value={{myList,dispatch}}>
      <ListGRoup  />
      <InputComponent  />
    </TodoContext.Provider>
    
  );
}

export default App;

// const myRef=useRef(null)
// const handleClick=()=>{

// }

// <Child ref={myRef}/>
//       <button onClick={()=> myRef.current.handleButtonClick()}>
//             Click Me
//         </button>

// const [userName, setUserName] = useState("");
// const [amount, setAmount] = useState(0);
// const [address, setAddress] = useState("");

// const handleChange = (e) => {
//   console.log(e.target.name);
//   if (e.target.name == "userName") {
//     setUserName(e.target.value);
//   } else if (e.target.name == "amount") {
//     setAmount(e.target.value);
//   } else {
//     setAddress(e.target.value);
//   }
// };

{
  /* <Container>
<InputGroup className="mb-3">
  <InputGroup.Text>@</InputGroup.Text>
  <Form.Control
    placeholder="Username"
    onChange={handleChange}
    value={userName}
    name="userName"
  />
</InputGroup>
<InputGroup className="mb-3">
  <InputGroup.Text>$</InputGroup.Text>
  <Form.Control
    aria-label="Amount (to the nearest dollar)"
    onChange={handleChange}
    name="amount"
    value={amount}
  />
  <InputGroup.Text>.00</InputGroup.Text>
</InputGroup>{" "}
<InputGroup>
  <InputGroup.Text>address</InputGroup.Text>
  <Form.Control
    value={address}
    name="address"
    onChange={handleChange}
    as="textarea"
    aria-label="With textarea"
  />
</InputGroup>
<FormData userName={userName} amount={amount} address={address} />
</Container> */
}
