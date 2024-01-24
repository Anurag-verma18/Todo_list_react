import './App.css';
import {useState} from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="input-area">
          <div className="input-items">
            <label>Title:</label>
            <input type="text" placeholder="What's the task title?"/>
          </div>
          <div className="input-items">
            <label>Description:</label>
            <input type="text" placeholder="What's the task description?"/>
          </div>
          <div className="input-items">
            <button className="input-add-btn">Add</button>
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
          <div className="todo-list-item">
            <div>
              <h3>Task 1</h3>
              <p>Description</p>
            </div>
            <div className='icon-area'>
              <AiOutlineDelete className='icon'/>
              <BsCheckLg className='check-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
