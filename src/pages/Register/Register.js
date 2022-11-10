import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {

  useTitle('Register')
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
        <div className="hero py-20 mt-4 mb-12 bg-base-200 rounded-2xl">
      <div className="">
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl text-center font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
            </div>
            <p className='mt-4'>Already have any account? <Link to='/login' className="text-sky-500">Please Login</Link></p>
            <div className="form-control mt-6">
                <input className="btn btn-success" type="submit" value="Register" />
                <button className="btn bg-sky-400 border-none font-bold mt-4"><FaGoogle /></button>
            </div>
          </form>

        </div>
      </div>
    </div>
    );
};

export default Register;