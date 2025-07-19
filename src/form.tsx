
import { useForm } from 'react-hook-form'
import React from 'react'

export const Form = () => {
    interface inptypes {
        name:string,
        email:string,
        message:string,
    }
    const {register,handleSubmit,formState} = useForm<inptypes>();
    const {errors} = formState;
    const submit= (data:inptypes)=>{
        console.log(data)
    }
  return (
    <div className="container"  >
        <div className="card rounded-2xl">
            <form onSubmit={handleSubmit(submit)} noValidate>
            <div className='form-1 mt-3'>
            <label htmlFor="name">Name</label>
            <input  className='rounded-2xl bg-gray-200 mt-1' id="name" type="text" {...register('name',{required:"Name is required"})}/>
            <p className='errors'>{errors && errors.name?.message}</p>
            </div>
            <div className='form-1 mt-3'>
            <label htmlFor="email">Email</label>
            <input id="email" type="text"  className='rounded-2xl bg-gray-200 mt-1'
                        {...register ('email', { 
                        pattern : 
                        {
                        value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                        message:"Invalid Email"},
                        required:"Email is Required"
                        }
                        )}
            />
            <p className='errors'>{errors && errors.email?.message}</p>
            </div>
            <div className='form-1 mt-3'>
            <label htmlFor="message">Message</label>
            <input className='rounded-2xl bg-gray-200 bg-black mt-1' id="message" type="text" {...register('message',{required:{value:true,message:"Message is required"}})}/>
            <p className='errors'>{errors && errors.message?.message}</p>
            </div>
            <button className='bg-blue-500 mt-10 px-4 py-2 rounded-md '> Submit</button>
            </form>
        </div>
    </div>

  )
}



