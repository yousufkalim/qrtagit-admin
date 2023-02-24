import React, { FC, useEffect, useRef } from 'react';
import riseArrow from '../../assets/Analytics/ArrowRise.svg';
import fallArrow from '../../assets/Analytics/ArrowFall.svg';
import Chart from 'chart.js/auto';
import './Analytics.css';

const Analytics: FC = () => {
  const datapoints = [1, 6, 4, 7, 10, 20];
  const datapointsCurrent = [2, 5, 3, 2, 11, 15];

  const chartRef: any = useRef(null);
  const barChartRef: any = useRef(null);
  // const doughnutRef: any = useRef(null);

  const barData = {
    labels: ['linux', 'windows', 'MacOs', 'Android', 'IOS'],
    datasets: [
      {
        data: [65, 120, 70, 95, 56, 55, 30],
        backgroundColor: [
          '#7357F6',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
      },
    ],
  };

  const data: any = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Previous Week',
        data: datapoints,
        // borderColor: Utils.CHART_COLORS.red,
        fill: false,
        borderColor: '#ED7E63',
        // backgroundColor: '#A8C5DA',
        cubicInterpolationMode: 'monotone',
        tension: 0.7,
      },
      {
        label: 'Current Week',
        data: datapointsCurrent,
        // borderColor: Utils.CHART_COLORS.blue,
        fill: false,
        borderColor: '#7357F6',
        tension: 0.7,
      },
    ],
  };

  useEffect(() => {
    const ctx: any = chartRef?.current?.getContext('2d');
    const bar: any = barChartRef?.current?.getContext('2d');
    // const doughnut: any = doughnutRef?.current?.getContext('2d');

    // eslint-disable-next-line no-new
    new Chart(bar, {
      type: 'bar',
      data: barData,
      options: {
        elements: {
          bar: {
            borderWidth: 1,
            inflateAmount: 0.1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        backgroundColor: '#F7F9FB',

        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            // display: false,
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 300,
          },
        },
      },
    });

    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'line',
      data,
      options: {
        elements: {
          line: {
            borderWidth: 6,
          },
        },
        // responsive: true,
        plugins: {
          title: {
            display: true,
          },
          legend: {
            labels: {
              usePointStyle: true,
            },
          },
          tooltip: undefined,
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 200,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className="mainDiv">
        <div className="maincardsDiv">
          <div className="cardDiv">
            <div>
              <p className="description">Total Users</p>
              <p className="figure">896K</p>
            </div>
            <div className="percentage-div">
              <p className="profit">+50.11%</p>
              <div className="arrow-img-div">
                <img src={riseArrow} alt="riseArrow" />
              </div>
            </div>
          </div>
          <div className="cardDiv blue">
            <div>
              <p className="description">Visits</p>
              <p className="figure">435K</p>
            </div>
            <div className="percentage-div">
              <p className="profit">+8.78%</p>
              <div className="arrow-img-div">
                <img src={riseArrow} alt="riseArrow" />
              </div>
            </div>
          </div>
          <div className="cardDiv yellow">
            <div>
              <p className="description">Daily Active Users</p>
              <p className="figure">567.8K</p>
            </div>
            <div className="percentage-div">
              <p className="profit loss">-0.65%%</p>
              <div className="arrow-img-div">
                <img src={fallArrow} alt="riseArrow" />
              </div>
            </div>
          </div>
          <div className="cardDiv green">
            <div>
              <p className="description">New Users</p>
              <p className="figure">208K</p>
            </div>
            <div className="percentage-div">
              <p className="profit loss">-11.66%%</p>
              <div className="arrow-img-div">
                <img src={fallArrow} alt="riseArrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="line-chart">
          <canvas className="canvas" ref={chartRef} />
        </div>
        <div className="bar-chart">
          <canvas className="canvas" ref={barChartRef} />
        </div>
        {/* <div className="doughnut-chart">
          <canvas className="canvas" ref={doughnutRef} />
        </div> */}
      </div>
    </>
  );
};

export default Analytics;
