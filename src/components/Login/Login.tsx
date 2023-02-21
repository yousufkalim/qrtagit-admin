/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import '../Login/Login.css';

const Login: FC = () => {
  const [userFrom, setUserForm] = useState<any>({
    Username: '',
    password: '',
  });
  // const handleChange = (e: any) => void {
  //   setUserForm(e.target.value);
  // };
  return (
    <div>
      <div className="Login_main">
        <div className="Login_login_center">
          <div className="Login_form">
            <p className="login_title"> LOGIN</p>
            <input
              type="text"
              name="Username"
              value={userFrom.Username}
              className="login_input"
              placeholder="Username"
              onChange={(e) => setUserForm(e.target.value)}
            />
            <input
              type="text"
              name="password"
              value={userFrom.password}
              className="login_input"
              placeholder="Password"
              onChange={(e) => setUserForm(e.target.value)}
            />
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">&nbsp;Remember me</label>
            <button className="login_btn" type="button">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
