import axios from "axios";
import { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { URL } from "../App";
import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";

export const Requestblood = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const { data } = await axios.get(`${URL}/api/tasks`);
    setTasks(data);
  };

  const addTask = async (task) => {
    await axios.post(`${URL}/api/tasks/`, JSON.stringify(task));
    getTasks();
  };

  const deleteTask = async (_id) => {
    await axios.delete(`${URL}/api/tasks/${_id}/`, {method: 'DELETE'});
    getTasks();
  };

  return (<>
    <div className="container">
    <form className="d-flex">
      <Link to="/">
        <Button className="me-3" variant="danger"> Go back</Button>
      </Link>
    </form>
    
    <Header title="Blood Donation Form"
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} />
    :('Nothing to show!')}
    </div>
   
    
    </>
  )
};