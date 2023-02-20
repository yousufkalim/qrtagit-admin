/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
// import React, { FC } from 'react';
import React, { FC, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // or import the theme you want

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
  const quillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: 'snow', // or use the theme you want
        modules: {
          toolbar: [
            [
              // { font: [] },
              // { size: [] },
              { header: [1, 2, 3, 4, 5, 6, false] },
            ],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],

            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            [
              'link',
              'image',
              // 'video',
              //  'formula'
            ],
            // ['code-block'],
          ],
        },
      });
    }
  }, []);
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
        <div className="Feedback_col">
          {/* quill */}
          {/* quill */}
          {/* <div className="graph_header">
            <p className="graph_name">Normal</p>
            <img src="" alt="" className="graph_icon1" />1
            <img src="" alt="" className="graph_icon1" />2
            <img src="" alt="" className="graph_icon1" />2
            <img src="" alt="" className="graph_icon1" />4
            <img src="" alt="" className="graph_icon1" />5
            <img src="" alt="" className="graph_icon1" />6
            <img src="" alt="" className="graph_icon1" />7
            <img src="" alt="" className="graph_icon1" />8
            <img src="" alt="" className="graph_icon1" />9
            <img src="" alt="" className="graph_icon1" />
            10
            <img src="" alt="" className="graph_icon1" />
            11
            <img src="" alt="" className="graph_icon1" />
            12
            <img src="" alt="" className="graph_icon1" />
            13
            <img src="" alt="" className="graph_icon1" />
            14
            <img src="" alt="" className="graph_icon1" />
            15
          </div> */}

          <div className="graph_section">
            <div className="graph_mail">
              <p className="graph_from_p">From:</p>
              <p className="graph_from_email">&nbsp;henrymark@email.com</p>
            </div>
            <div className="graph_mail">
              <p className="graph_from_p">Subject: </p>
              <p className="graph_from_email">&nbsp;Subscription renewal</p>
            </div>
            <div className="graph_mail">
              <p className="graph_from_p">Message:</p>
            </div>
            <p className="graph_content">
              Lorem ipsum dolor commodi voluptas dolor, natus nam earum nisi saepe molestiae,
              facilis adipisci possimus? Exercitationem tempore sit nisi! Quasi ea rerum
              voluptatibus suscipit at natus! Autem provident, debitis reiciendis, eius mollitia
              quibusdam dolore expedita pariatur dolor deleniti distinctio ratione laudantium amet
              sit blanditiis temporibus perferendis ex at odit! Corporis ullam nemo laboriosam
              praesentium neque facilis illo, voluptatem numquam saepe fugit alias vel harum,
              cupiditate porro ex? Tempore non odit veniam adipisci voluptates suscipit nemo
              obcaecati dolorem voluptate. Facilis, distinctio sint. Molestiae ipsam soluta est,
              sequi, commodi eius eveniet provident aliquid perferendis voluptas eaque accusamus eos
              blanditiis sit. Minus corporis quia beatae in, expedita molestias cumque, culpa totam
              debitis facere corrupti soluta quibusdam eveniet.
            </p>
            <div className="graph_response">
              <p className="graph_from_p">Response</p>
              <div
                ref={quillRef}
                style={{ height: '300px', marginBottom: '10px', backgroundColor: 'white' }}
              ></div>
              {/* <textarea
                name=""
                id=""
                className="graph_textArea"
                placeholder="Type your response here..."
              ></textarea> */}
            </div>
            <div className="graph_buttons_div">
              <button type="button" className="graph_btn">
                Clear
              </button>
              <button type="button" className="graph_btn2">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
