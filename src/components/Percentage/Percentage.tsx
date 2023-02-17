import React, { FC } from 'react';

import './Percentage.css';

const Percentage: FC = () => {
  return (
    <div className="percentage">
      <div className="percentage_center">
        <div className="label_input">
          <label>Referral Discount</label>
          <div className="input_feild_outer">
            <p>% |</p>
            <input className="input_feild" type="text" name="" id="" />
          </div>
        </div>
        <div className="label_input">
          <label>Sender Discount</label>
          <div className="input_feild_outer">
            <p>% |</p>
            <input className="input_feild" type="text" name="" id="" />
          </div>
        </div>
        <button className="Save_btn">Save</button>
      </div>
    </div>
  );
};

export default Percentage;
