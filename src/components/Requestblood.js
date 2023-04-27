
import { Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

import Header from "./Header";
import Tasks from "./Tasks";
import { useState, useEffect } from "react"
import AddTask from "./AddTask";

export const Requestblood = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks]=useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    //const res = await fetch('http://localhost:5000/tasks')
    const res = await fetch('http://localhost:8000/tasks/')
    const data = await res.json()
    console.log(data)
    return data
  }

    // Delete Task
  const deleteTask = async (id) => {
    //const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      const res = await fetch(`http://localhost:8000/tasks/${id}/`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

    // Add Task
  const addTask = async (task) => {
    //const res = await fetch('http://localhost:5000/tasks', {
      const res = await fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }
    

  return (<>
    <div className="container">
    <form className="d-flex">
    <Link to="/">
            <Button className="me-3" variant="danger"> Go back</Button>
    </Link>
    
    </form>
    
    <Header title="Blood Request Form"
     onAdd={() => setShowAddTask(!showAddTask)}
     showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} />
    :('Nothing to show!')}
    </div>
   
    
    </>
  )
}
