import './App.css';
import {useState} from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodo = {
      title: newTitle,
      description: newDescription
    }

    let updateTodoArr = [...allTodos]
    updateTodoArr.push(newTodo);
    setAllTodos(updateTodoArr);
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="input-area">
          <div className="input-items">
            <label>Title:</label>
            <input type="text" placeholder="What's the task title?"
                value = {newTitle} onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="input-items">
            <label>Description:</label>
            <input type="text" placeholder="What's the task description?"
                value = {newDescription} onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <div className="input-items">
            <button className="input-add-btn" onClick={handleAddTodo}>Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button 
             className={`secondary-btn ${isTaskCompleted === false && 'active'}`}
             onClick={() => setIsTaskCompleted(false)}
          >
            Todo
          </button>
          <button 
             className={`secondary-btn ${isTaskCompleted === true && 'active'}`}
             onClick={() => setIsTaskCompleted(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list-area">
          {allTodos.map((item) => {
            return (
              <div className="todo-list-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className='icon-area'>
                  <AiOutlineDelete className='icon'/>
                  <BsCheckLg className='check-icon' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
