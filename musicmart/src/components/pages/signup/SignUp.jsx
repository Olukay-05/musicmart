import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';


// import { gapi } from "gapi-script";

import SignUpButton from "../../../routes/google-login/googleSignUp"
// import LogoutButton from "../../../routes/google-login/googleLogout"


import axios from 'axios';

import "../signup/SignUp.scss"


const SignUp = () => {

    const [error, setError] = useState(true);
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const { reset } = useForm();
    const url = "http://localhost:8080/api/v1/demo/signup"

    const signUp = async (signUpData) =>{
        try {
            const res = await axios.post(url, signUpData)
            console.log(res);
            setError(false);
        } catch (error) {
            
        };
    }
    
    const onSubmit = (data) => {
        
        console.log(data);
        signUp(data);
        // if(!error){
        //     navigate("/Login");
        // }else{
        //     alert("invalid details, sign up with your correct details")

        // }
        navigate("/Login");
       
    };


  return (
    
    <div>

        <Form onSubmit={handleSubmit(onSubmit)} className="custom-form">


            <div className="google">
                <SignUpButton />
                <br />
                {/* <LogoutButton /> */}
            </div>
            <br />



            <Form.Group className="form-control">
        <Form.Label>What's your email?</Form.Label>
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
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
    </Form.Group>

    <Form.Group className="form-control">
        <Form.Label>Confirm your email</Form.Label>
        <Form.Control 
            type="text" 
            name="email" 
            placeholder="Confirm your email"
            {...register("email", {
                required: "Email is required.",
                pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid."
                }
            })}
        />
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
    </Form.Group>

    <Form.Group className="form-control">
        <Form.Label>Create a password</Form.Label>
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
        {errors.password && <p className="errorMsg">{errors.password.message}</p>}
    </Form.Group>

    <Form.Group>
        <Form.Label>What's your date of birth?</Form.Label>
        <Form.Control 
            type="date" 
            name="date"
            {...register("date", {
                required: 'Date of birth is required',
                min: {
                    value: '01-01-1900',
                    message: 'Date of birth must be after 1900-01-01'
                }
            })}
        />
    </Form.Group>



            <Form.Group className="mb-3" controlId="gender">
          <Form.Label>What's your gender?</Form.Label>
          <Form.Check
                type="radio"
                label="Male"
                value="male"
                {...register("gender", {
                required: "Please select your gender"
                })}
          />
          <Form.Check
                type="radio"
                label="Female"
                value="female"
                {...register("gender")}
          />

            <Form.Check
                type="radio"
                label="Prefer not to say"
                value="preferNotToSay"
                {...register("gender")}
          />

          
          {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="options">
          {/* <Form.Label>I would prefer not to receive marketing messages from musicmart</Form.Label> */}
          <Form.Check
            type="checkbox"
            label="I would prefer not to receive marketing messages from musicmart"
            value="firstOption"
            {...register("firstOption", {
              
            })}
          />
          <Form.Check
            type="checkbox"
            label="Share my registration data with 
                    musicmart's content providers for marketing purposes."
            value="secondOption"
            {...register("secondOption")}
          />
          
          {errors.options && <p className="errorMsg">{errors.options.message}</p>}
        </Form.Group>

        <Button type="submit" variant="success">Sign up</Button>
        </Form>
    </div>
  )
}

export default SignUp