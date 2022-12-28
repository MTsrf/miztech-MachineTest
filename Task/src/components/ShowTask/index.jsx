import React, { useEffect, useState } from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import { BsArrowReturnRight } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import './style.css'
const ShowTask = ({ task }) => {
    const [childTask, setChildTask] = useState([])
    const [empty, setEmpty] = useState(false)
    const [open, setOpen] = useState(false)
    const [closeIcon, setCloseIcon] = useState(false)

    const childtask = ((id) => {
        const child = task?.filter((item) => {
            return id === item.parent_task
        })

        if (child.length === 0) {
            setChildTask([])
            return setEmpty(toast.error("Child is Empty !", {
                position: toast.POSITION.BOTTOM_CENTER,
                toastId: 'error1'
            }))
        }
        setEmpty(false)
        setChildTask(child)
        setCloseIcon(true)
        setOpen(!open)

    })


    const parentall = task?.map((item) => (
        (item.parent_task == null) &&
        < div className="showtask-container" key={item.id}>
            <div className='content-screen'>
                <div className='icon-showtask'>
                    <BiPlayCircle className='icon-arrow-task' onClick={() => { childtask(item.id) }} />
                </div>
                <div className='task-content'>
                    <div className='name-heading'>
                        <h6>{item.title}</h6>
                        <div className='active-check'>
                            <div className="round-color">
                            </div>
                            <span className='active-head'>Task-title</span>
                        </div>
                    </div>

                    <h6>{item.due}</h6>
                </div>
            </div>
            {
                open && childTask &&
                childTask?.map((task) => (
                    <div key={task.id}>
                        {(item.id === task.parent_task) &&
                            <>
                                <div className="child-content">
                                    <div className='childtask-icon'>
                                        <BsArrowReturnRight />
                                    </div>
                                    <div className="child-task-content">
                                        <span className='title-task'>{task.title}</span>
                                        <span className='title-task'>{task.due}</span>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                ))

            }

        </div >
    ))
    return (
        <>
            <section className="contain">

                {
                    parentall
                }
                <ToastContainer />

            </section>
        </>
    )
}

export default ShowTask
