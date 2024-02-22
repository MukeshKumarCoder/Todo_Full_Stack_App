import React, { useState } from "react";
import "./Todo.css";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { baceURL } from "../../../utils.js";
import  axios  from "axios";

const Todo = ({ text, id, setUpdateUI }) => {


  const deleteTodo = async() => {
    try {
       axios.delete(`${baceURL}/delete/${id}`,{
        withCredentials:true
       });
      // console.log(res.data)
       setUpdateUI((prev)=> !prev);
    } catch (error) {
      console.log(`error ${error}`)
    }
  };

  return (
    <div className="todo">
      {text}
      <div className="icons">
        <span>
          {" "}
          <FaPen />{" "}
        </span>
        <span>
          {" "}
          <MdDelete onClick={deleteTodo} />{" "}
        </span>
      </div>
    </div>
  );
};

export default Todo;
