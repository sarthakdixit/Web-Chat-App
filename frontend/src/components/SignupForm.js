import React, {userEffect, useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { signup } from '../actions/auth';
import { toast } from 'react-toastify';

const SignupForm = ({setLoginPage}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let res = await signup(formData);
        if(res.status){
          toast.success(res.mssg);
        }else{
          toast.error(res.mssg);
        }
    };
    return (
        <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Unique User Name"
                      value={name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="User Email"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      minLength="6"
                      value={password}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    name="add_record"
                  >
                    Signup
                  </button>
                  <div style={{ marginTop: "10px" }}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => setLoginPage(true)}
                    >Login Page
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-dark"
                      style={{ marginLeft: "5px" }}
                    >
                      <Link to="/reset-password" style={{textDecoration: "none", color:"white"}}>Forget Your Password?</Link>
                    </button> */}
                  </div>
                </form>
    )
}

export default SignupForm
