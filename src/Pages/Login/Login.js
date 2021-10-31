import React from 'react';
import "./Login.css"

import { useForm } from "react-hook-form";
import googleIcon from "../../images/google.png"
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

    const {user,error,signInWithGoogle,setIsLoading} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"
    


    const handleGoogleLogin = ()=>{
      signInWithGoogle()
        .then((result) => {
          history.push(redirect_uri);
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => setIsLoading(false));

    }
    return (
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Name")} placeholder="Name" />
          <input {...register("Email")} placeholder="Email" />
          <input {...register("Address")} placeholder="Password" />
          <input className="w-25 p-2" type="submit" />
        </form>
        <Button variant="outline-primary" onClick={handleGoogleLogin}>
          <img className="googleIcon" src={googleIcon} alt="" />
          Google Sign In
        </Button>
      </div>
    );
};

export default Login;