import React from 'react'
import './style.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AddTask = ({ task, setAddTask }) => {
    const [error, setError] = useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (formdata) => {
        const { title, due, task } = formdata
        let parent_task = null
        if (parseInt(task)) {
            parent_task = task
        }
        try {
            const { data } = await axios.post("http://18.208.183.190/api/tasks/", {
                title,
                due,
                parent_task,
            })
            if (data) {
                toast.success("Task Added Successfully", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    toastId: 'success1'
                })
                reset()
            }

        } catch (error) {
            const { response: { data } } = error
            setError(data)
        }

    }

    return (
        <>
            <section className="contain ">
                <div className='addtask-container'>
                    {
                        error && < div >
                            {Object.keys(error).map((keys) =>
                                error[keys].map((errorMessage) => <p style={{ color: 'red', fontSize: '10px' }}>{errorMessage}</p>)
                            )}
                        </div>
                    }
                    <div className="addtask-content">
                        <form onSubmit={handleSubmit(onSubmit)} className='form-content'>
                            <div className='input-field'>
                                <label htmlFor="title">Title</label>
                                <input type="text"
                                    placeholder='Title'
                                    name='title'
                                    id='title'
                                    {...register("title", { required: true })}
                                />

                            </div>
                            {errors.title && <span className='error-form'>Please enter the title</span>}
                            <div className='input-field'>
                                <label htmlFor="date">Due</label>
                                <input type="date"
                                    name='due'
                                    id='due'
                                    {...register("due", { required: true })}
                                />
                            </div>
                            {errors.title && <span className='error-form'>Please select the date</span>}
                            <div className='input-field'>
                                <label htmlFor="parent_task">Parent task</label>
                                <select
                                    name="task"
                                    id="task"
                                    className='select-field'
                                    {...register("task", { required: true })}
                                >

                                    <option value="null" itemType='number'>---</option>
                                    {

                                        task?.map((item, index) => (
                                            (item.parent_task == null) &&
                                            <option value={item.id} key={index}>{item.title}</option>
                                        ))
                                    }


                                </select>
                            </div>
                            {errors.title && <span className='error-form'>Please select task</span>}
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default AddTask
