/* eslint-disable array-callback-return */
import React, { FC } from 'react';
import ProfileBg from '../../assets/ProfileBg.png';
import './Feedback.css';

const user = [
  {
    name: 'Hentry',
    mail: 'henrymark@email.com',
    userDate: 'Today-13:24',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto aspernatur ullam minima ratione id atque magni!',
  },
  {
    name: 'Hentry',
    mail: 'henrymark@email.com',
    userDate: 'Today-13:24',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto aspernatur ullam minima ratione id atque magni!',
  },
];
const Feedback: FC = () => {
  return (
    <div className="Feedback">
      <p className="Feedback_msg">53 messages</p>
      <div className="Feedback_center">
        <div className="Feedback_col">
          {user.map((val, index) => (
            <div className="Feedback_box" key={index}>
              <div className="Feedback_user">
                <img src={ProfileBg} alt="" className="Feedback_user_img" />
                <div>
                  <p className="Feedback_user_name">{val.name}</p>
                  <p className="Feedback_user_email">{val.mail}</p>
                </div>
                <p className="Feedback_date">{val.userDate}</p>
              </div>
              <div className="Feedback_content">
                <p className="Feedback_content_p">{val.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="Feedback_col"></div>
      </div>
    </div>
  );
};

export default Feedback;
