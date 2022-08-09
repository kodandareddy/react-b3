import { useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import Icon from "./Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemArray = new Array(9).fill("empty");
console.log(itemArray);

const App = () => {
  const [isCross, setIsCross] = useState(true);
const [winMessage,setWinMessage]=useState("")
const [draw,setDraw]=useState("")
  const checkWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };
  const reLoadGame=()=>{
    itemArray.fill("empty")
    setWinMessage("")
    setIsCross(true)
  }

  const checkDraw=()=>{
    if([...itemArray].filter((item)=> item!='empty').length ==8){
      setDraw("MatchDraw")
    }
  }

  const handleClick = (item) => {
    if (itemArray[item] == "empty") {
      itemArray[item] = isCross ? "cross" : "circle";
      setIsCross((isCross) => !isCross);
    } else {
      toast.error(`Already taken by ${itemArray[item]}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    checkWinner();
    checkDraw()
  };
  return (
    <Container className="p-5">
      <Row>
        <Col md={6}>
          {
            <h1 className="text-center mb-2 text-warning">
              {isCross ? "Cross" : "circle"}
            </h1>
          }
          {
            winMessage && (
            <div>
            <h3 className="text-success">{winMessage}</h3>
              <Button onClick={reLoadGame}>Reload</Button>
            </div>
            )
          }
          {
            draw &&(
              <div>
              <h3 className="text-success">{draw}</h3>
                <Button onClick={reLoadGame}>Reload</Button>
              </div>
            )
          }

          <div className="flex">
            {itemArray.map((item, index) => {
              return (
                <Card color="warning" onClick={() => handleClick(index)}>
                  <CardBody>
                    <Icon name={item} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default App;

{
  /* <Container className="p-5">
      <Row>
        <Col md={6}>
          <div className="flex">
            {iteArray.map((item) => {
              return <Card className="card_color" color="warning">
                <CardBody className="box">
                   <Icon name={item} />
                </CardBody>
              </Card>;
            })}
          </div>
        </Col>
      </Row>
    </Container> */
}

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from "reactstrap";
// const App = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//       setTodos(res.data);
//     });
//   }, []);

//   console.log(todos, "+++++");
//   return (
//     <div>
//       <Row>
//         {todos.map((todo) => {
//           return (
//             <Col>
//               <Card style={{ width: "200px" }}>
//                 <CardBody>
//                   <CardTitle tag="h5">User Info</CardTitle>
//                   <CardSubtitle className="mb-2 text-muted" tag="h6">
//                     {todo.id}
//                   </CardSubtitle>
//                   <CardText>{todo.title}</CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//           );
//         })}
//       </Row>
//     </div>
//   );
// };

// export default App;
