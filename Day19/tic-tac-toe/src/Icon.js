// import React from "react";

// const Icon = ({ name }) => {
//   switch (name) {
//     case "circle":
//       return "circle";
//     case "cross":
//       return "cross";
//     default:
//       return "Pencil";
//   }
// };

// export default Icon;
import { FaCircle, FaCross, FaPen, FaTimes, ImPencil } from 'react-icons/fa';

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return  <FaCircle className='icons'/>;
    case "cross":
      return <FaTimes className='icons'/>;
    default:
      return <FaPen className='icons' />;
  }
};

export default Icon;

