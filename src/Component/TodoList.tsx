import React from 'react'
import {ITask} from '../Interface';

interface Props{
    task:ITask;
    completeTask(tasknametoDelete:string):void;
}
const TodoList=({task,completeTask}:Props)=> {
    console.log(task,"task")
  return (
      <>
    <div className="task"> 
    <div className="content">
        
 <span>{task.taskName} </span>
 <span>{task.deadline}</span>
    </div>
    <button onClick={()=>
        {
            completeTask(task.taskName)
            }
            }>X</button>
   
    </div>
    </>
  )
}

export default TodoList;