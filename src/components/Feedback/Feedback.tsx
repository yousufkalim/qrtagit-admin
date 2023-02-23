/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import React, { FC, useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // or import the theme you want
import request from '../../api/request';
import moment from 'moment';

import ProfileBg from '../../assets/ProfileBg.png';
import './Feedback.css';

interface ILooserObject {
  address: string;
  city: string;
  id: number;
  postal_code: string;
  profile_picture: string;
  state: string;
  user: number;
}

interface IUserObject {
  email: string;
  enable_push_notification: boolean;
  id: number;
  looser: ILooserObject;
  name: string;
  phone_number: string;
  use_device_location: boolean;
  user_type: string;
}

interface IResponseUser {
  created_at: string;
  id: number;
  message: string;
  modified_at: string;
  replies: IRepliesObject[];
  subject: string;
  user: IUserObject;
}

interface IRepliesObject {
  created_at: string;
  feedback: number;
  id: number;
  message: string;
  modified_at: string;
}
interface IResponse {
  feedback: number | null;
  subject: string;
  message: string;
}

const Feedback: FC = () => {
  const [users, setUsers] = useState<IResponseUser[]>([]);
  const quillRef = useRef<HTMLDivElement>(null);
  const [quil, setQuil] = useState<any>();
  const [user, setUser] = useState<IResponseUser>();

  const getAllFeedbacks = (): void => {
    request<IResponseUser[]>('get', '/admin/feedback/')
      .then((res) => {
        setUsers(res);
        if (res?.length > 0) {
          setUser(res[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllFeedbacks();
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        placeholder: 'Type your response here...',
        theme: 'snow', // or use the theme you want
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],

            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            [{ script: 'sub' }, { script: 'super' }],

            ['link', 'image'],
          ],
        },
      });
      setQuil(quill);
      console.log('Test ', quill);
    }
  }, []);

  const handleSend = (): void => {
    if (user) {
      console.log('quilll ', quil);
      const data = {
        feedback: user?.id,
        subject: user?.subject,
        message: quil?.editor?.delta?.ops[0].insert.slice(0, -1),
      };
      console.log(data, 'data');
      request<IResponse>('post', '/admin/feedback-reply/', data)
        .then((res) => {
          getAllFeedbacks();
          console.log('response ', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClickUser = (val: IResponseUser): void => {
    setUser(val);
  };
  console.log(user, 'user');
  return (
    <div className="Feedback">
      <p className="Feedback_msg">{users.length} messages</p>
      <div className="Feedback_center">
        <div className="Feedback_col_all">
          {users.map((val, index) => (
            <div
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, eqeqeq
              className={`${user?.id === val.id && 'Feedback_box_active'} Feedback_box`}
              onClick={() => {
                handleClickUser(val);
              }}
              key={val.id}
            >
              <div className="Feedback_user">
                <img src={val.user?.looser?.profile_picture} alt="" className="Feedback_user_img" />
                <div>
                  <p className="Feedback_user_name">{val.user?.name}</p>
                  <p className="Feedback_user_email">{val.user?.email}</p>
                </div>
                <p className="Feedback_date">
                  {
                    moment(val.modified_at).calendar()
                    // ' - ' +
                    // moment(val.modified_at).format('LT')
                  }
                </p>
              </div>
              <div className="Feedback_content">
                <p className="Feedback_content_p">{val.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="Feedback_col">
          <div className="graph_section">
            <div className="graph_mail">
              <p className="graph_from_p">From:</p>
              <p className="graph_from_email">&nbsp;{user?.user?.email}</p>
            </div>
            <div className="graph_mail">
              <p className="graph_from_p">Subject: </p>
              <p className="graph_from_email">&nbsp;{user?.subject}</p>
            </div>
            <div className="graph_mail">
              <p className="graph_from_p">Message:</p>
            </div>
            <p className="graph_content">{user?.message}</p>
            <div className="graph_response">
              <p className="graph_from_p">Response</p>
              <div
                ref={quillRef}
                style={{ height: '300px', marginBottom: '10px', backgroundColor: 'white' }}
              ></div>
            </div>
            <div className="graph_buttons_div">
              <button type="button" className="graph_btn">
                Clear
              </button>
              <button onClick={handleSend} type="button" className="graph_btn2">
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
