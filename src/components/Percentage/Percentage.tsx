import React, { FC, useState } from 'react';

import './Percentage.css';

const Percentage: FC = () => {
  const [percentage, setPercentage] = useState({
    referralDiscount: '',
    senderDiscount: '',
  });
  const handleInput = (e: any): void => {
    setPercentage({ ...percentage, [e.target.name]: e.target.value });
  };
  return (
    <div className="percentage">
      <div className="percentage_center">
        <div className="label_input">
          <label>Referral Discount</label>
          <div className="input_feild_outer">
            <p>% |</p>
            <input
              className="input_feild"
              type="tel"
              name="referralDiscount"
              value={percentage.referralDiscount}
              onChange={handleInput}
            />
          </div>
          <div className="label_input">
            <label>Sender Discount</label>
            <div className="input_feild_outer">
              <p>% |</p>
              <input
                className="input_feild"
                type="tel"
                name="senderDiscount"
                value={percentage.senderDiscount}
                onChange={handleInput}
              />
            </div>
            <button className="Save_btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Percentage;
