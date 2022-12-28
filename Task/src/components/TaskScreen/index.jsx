import React, { useEffect, useState } from 'react'
import AddTask from '../AddTask'
import axiosInstance from '../helper/axiosInstance'
import ShowTask from '../ShowTask'
import './style.css'

const TaskScreen = () => {
    const [addTask, setAddTask] = useState(false)
    const [task, setTask] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosInstance.get()
            setTask(data)
        }
        fetchData()
    }, [update])
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
                                <AddTask task={task} setAddTask={setAddTask}
                                    update={update}
                                    setUpdate={setUpdate} /> :
                                <ShowTask task={task} />

                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default TaskScreen
