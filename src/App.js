
import { useState } from 'react';
import './App.css';
import {Task} from "./Task"

function App() {
    const [todoList,setTodoList] = useState([])//inital value 
    const [newTask, setNewTask] = useState('')//Inıtial inside of Input
    const [completedTaskCount, setCompletedTaskCount]=useState(0)

    const handleChange = (event) => {
      setNewTask(event.target.value)
      console.log(event.target.value)
    }
    const addTask = () => { 
      // let arr = []
      // const name = 'Efe'
      // arr.push(name)
      //this is js form However it is not possible.Because we have to remember that useState always have to use the function like of "setTodoList".It has to mutate the value "todoList"

        // const newTodoList = [...todoList,newTask]
        //[...todoList] => means make an array, that is composed of everything this list plus+ ,newTask value over here.(appending process)
        // setTodoList(newTodoList)
        const task = { 
        id: todoList.length === 0 ? 1 : [todoList.length-1].id + 1,
        taskName: newTask,
        completed : false,
        };
        setTodoList([...todoList,task])
        
    }

    const deleteTask = (id) => { 
      const newTodoList = todoList.filter((task)=>{ 
        return task.id !== id
      })
        // if(task === taskName){ 
        //   return false
        // }else { 
        //   return true 
        // }
        
      setTodoList(newTodoList)
      // setTodoList(todoList.filter((task)=>{ return task !==taskName
      // })) // it still work because of same above
    }
    const completeTask = (id) => { 
      setTodoList ( 
        todoList.map((task)=>{ 
          if(task.id === id){ 
            return {...task, completed: true};
          } else { 
            return task;
          }
        }));
    }
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} value={newTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='List'>
        {todoList.map((task) => { 
          return (
              <Task 
              
              taskName={task.taskName} 
              id={task.id} 
              completed = {task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask} 
              />
          );
        })};
      </div>
    </div>
  );
}

export default App;
