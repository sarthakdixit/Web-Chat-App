import React, {useState} from 'react'
import "../style/Auth.css";
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Auth = () => {
    const [loginPage, setLoginPage] = useState(true);
    return (
        <section id="cover" className="min-vh-100">
      <div id="cover-caption">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h2 className="display-4 py-2 text-truncate">Web Chat App</h2>
              <div className="px-2">
                {loginPage ? <LoginForm setLoginPage={setLoginPage} /> : <SignupForm setLoginPage={setLoginPage} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Auth
