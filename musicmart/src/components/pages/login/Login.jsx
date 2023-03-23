import React from 'react'
import { useForm } from "react-hook-form";


import "../login/Login.scss"

import { Form, Button } from 'react-bootstrap';

import 'bootstrap/scss/bootstrap.scss';



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

       {/* <form onSubmit={handleSubmit(onSubmit)}>
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
      </form> */}


     

<Form onSubmit={handleSubmit(onSubmit)} className="custom-form">
  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control 
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
    {errors.email && <Form.Text className="errorMsg">{errors.email.message}</Form.Text>}
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control 
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
      <Form.Text className="errorMsg">{errors.password.message}</Form.Text>
    )}
  </Form.Group>

  <Button type="submit">Login</Button>
</Form>

    </div>
  )
}

export default Login