import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./componants/Todo/Todo";
import axios from "axios";
import { baceURL } from "../utils";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [inputs, setInputs] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    getTogo();
  }, [updateUI]);

  const getTogo = async () => {
    let res = await axios.get(baceURL, {
      withCredentials: true,
    });
    setAllTodos(res.data);
    console.log(res.data, "ttt")
  };

  const createTodo = async () => {
    try {
      let res = await axios.post(
        `${baceURL}/create`,
        {title: inputs}, 
        {
          withCredentials: true,
        },
      );
      // setAllTodos(res.data.data);
      setUpdateUI((prev) => !prev);
      setInputs("");
      console.log(res.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  return (
    <div className="todoContainer">
      <h1>Full Stack ToDO App</h1>
      <div className="inputBox">
        <input
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
          type="text"
          placeholder="Add a ToDo"
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <div className="singleTodo">
        {/* <h1>{allTodos.todo}</h1> */}
        {allTodos.map((singleTodo) => (
          <Todo
            key={singleTodo._id}
            text={singleTodo.title}
            id={singleTodo._id}
            setUpdateUI={setUpdateUI}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
