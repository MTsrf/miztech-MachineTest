import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddTask from '../AddTask'
import ShowTask from '../ShowTask'
import './style.css'

const TaskScreen = () => {
    const [addTask, setAddTask] = useState(false)
    const [task, setTask] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://18.208.183.190/api/tasks/")
            setTask(data)
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="task-screen">
                <div className='header'>
                    <div className="head-list">
                        <h3
                            onClick={() => setAddTask(false)}
                        >TASK</h3>
                        <button
                            className='button'
                            onClick={() => { setAddTask(true) }}>ADD TASK</button>
                    </div>
                </div>
                <div className="maintask-screen-content">
                    {addTask ?
                        <div className="head-content">
                            <h5>Add Task</h5>
                        </div> :
                        <div className="head-content">
                            <h5>Task Title</h5>
                            <h5>Due</h5>
                        </div>}
                    <div className="showtask-main">

                        {
                            addTask ?
                                <AddTask task={task} setAddTask={setAddTask} /> :
                                <ShowTask task={task} />

                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default TaskScreen