import React, { FC } from 'react';
import './Analytics.css';

const Analytics: FC = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="maincardsDiv">
          <div className="cardDiv">
            <p>Total Users</p>
            <p>896K</p>
          </div>
          <div className="cardDiv">
            <p>Visits</p>
            <p>435K</p>
          </div>
          <div className="cardDiv">
            <p>Daily Active Users</p>
            <p>567.8K</p>
          </div>
          <div className="cardDiv">
            <p>Bew Users</p>
            <p>208K</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
