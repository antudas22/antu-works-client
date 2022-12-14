import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {

  useTitle('Login')

  const {login, providerLogin} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
        })
        .then(error => console.log(error));
    }

  return (
    <div className="hero py-20 mt-4 mb-12 bg-base-200 rounded-2xl">
      <div className="">
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>Do not have any account? <Link to='/register' className="text-sky-500">Please Register</Link></p>
            <div className="form-control mt-6">
                <input className="btn btn-success" type="submit" value="Login" />
                <button onClick={handleGoogleSignIn} className="btn bg-sky-400 border-none font-bold mt-4"><FaGoogle/></button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
