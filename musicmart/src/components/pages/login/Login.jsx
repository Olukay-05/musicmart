import React from 'react'
import { useForm } from "react-hook-form";


import "../login/Login.scss"



const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const { reset } = useForm();

    
    const onSubmit = (data) => {
        console.log(data);
    };


  return (
    <div className="App">
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Email"
            {...register("email", {
                required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
                }
            })}
            
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}

        </div>
        <div className="form-control">
          <label>Password</label>
            <input 
                type="password" 
                name="password" 
                placeholder="Password"
                {...register("password", {
                        required: "Password is required.",
                        minLength: {
                        value: 6,
                        message: "Password should be at-least 6 characters."
                    }
                })} 

            />

            {errors.password && (
                <p className="errorMsg">{errors.password.message}</p>
            )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login