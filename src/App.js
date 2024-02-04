// App.js
import React, { useState } from 'react';
import './App.css';
import Checked from './Checked';

function App() {
  const [toDos, setToDos] = useState([]);
  const [todo, setToDo] = useState("");

  const deleteTodo = (id) => {
    setToDos(toDos.filter(obj => obj.id !== id));
  };
  const timestamp = Date.now();
  const dayOfWeekNumber = new Date(timestamp).getDay();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[dayOfWeekNumber];

  return (
    <div className="app">
      <div className="first-part">
        <div className="mainHeading">
          <h1>Plan Your {dayName} </h1>
        </div>
        <div className="subHeading">
          <br />
          <h2 className='d-flex justify-center'>What's On your Mind?</h2>
        </div>
        <div className="input">
          <input value={todo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add Task..." />
          <i onClick={() => setToDos([...toDos, { id: Date.now(), name: todo, status: false }])} className="fas fa-plus"></i>
        </div>
        {
          toDos.map((obj) => {
            return (
              <div className="todos" key={obj.id}>
                <div className="todo">
                  <div className="left">
                    <input onChange={(e) => {
                      setToDos(toDos.map(obj2 => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked
                        }
                        return obj2
                      }))
                    }} type="checkbox" value={obj.status} />
                    <p>{obj.name}</p>
                  </div>
                  <div className="right">
                    <i onClick={() => deleteTodo(obj.id)} className="fa-solid fa-trash-can"></i>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="second-part">
        <Checked toDos={toDos} />
      </div>
    </div>
  );
}

export default App;
