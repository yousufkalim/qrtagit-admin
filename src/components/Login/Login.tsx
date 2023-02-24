/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import '../Login/Login.css';
import api from '../../api/request';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [user, setUser] = useState<any>({
    username: '',
    password: '',
  });
  const handleInput = (e: any): any => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (): any => {
    try {
      void api('post', '/admin/get-token/', user).then((res) => {
        localStorage.setItem('token', res.token);
        navigate('/');
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="Login_main">
        <div className="Login_login_center">
          <div className="Login_form">
            <p className="login_title"> LOGIN</p>
            <input
              type="text"
              name="username"
              value={user.username}
              className="login_input"
              placeholder="Username"
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              className="login_input"
              placeholder="Password"
              onChange={handleInput}
            />
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">&nbsp;Remember me</label>
            <button className="login_btn" type="button" onClick={handleSubmit}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
