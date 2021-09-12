import React, {useEffect, useState} from 'react'
import { Link, Redirect } from "react-router-dom";
import { login } from '../actions/auth';
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux';

const LoginForm = ({setLoginPage}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name_email: "",
        password: "",
    });

    const { name_email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let res = await login(formData);
        if(res.status){
          toast.success(res.mssg);
          dispatch({ type: res.type, payload:res.data })
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
                      name="name_email"
                      placeholder="User Name Or Email"
                      value={name_email}
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
                    Login
                  </button>
                  <div style={{ marginTop: "10px" }}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => setLoginPage(false)}
                    >Create Your Account
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

export default LoginForm
