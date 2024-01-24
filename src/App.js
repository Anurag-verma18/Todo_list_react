import './App.css';

function App() {
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
          <button className="secondary-btn">Todo</button>
          <button className="secondary-btn">Completed</button>
        </div>

        <div className="todo-list-area">
          <div className="todo-list-item">
            <h3>Task 1</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
