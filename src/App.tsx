import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import {ITask} from './Interface'
import TodoList from './Component/TodoList';
const App :FC=()=> {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  //here we pass ITask from Interface
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
   console.log(typeof(e.target.name),"hhhh")
    if(e.target.name ==="task")
    {
     
      setTask(e.target.value);
    }
    else{
     console.log("else cond")
      setDeadline(Number(e.target.value));
    }
  
  }
  const addTask=():void=>{
    const newTask={taskName:task, deadline:deadline};
    setTodoList([...todoList,newTask])
    console.log(todoList)
    setTask("");
    setDeadline(0)

  }
  const completeTask=( tasknametoDelete:string ):void=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName!=tasknametoDelete;
    }
    )
    )

    
  }
  return (
    <div className="App">
      <header className="header">
        <div  className="inputContainer">
        <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
       </div>
       <button onClick={addTask} >Add task</button>
      </header>
      <div className="todoList">
     {   todoList.map((task:ITask, key:number)=>{
       return  <TodoList key={key} task={task} completeTask={completeTask}  />
     })
    }
        
      </div>
    </div>
  );
}

export default App;
