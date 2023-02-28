/* eslint-disable no-new */
import React, { FC, useEffect, useRef } from 'react';
import riseArrow from '../../assets/Analytics/ArrowRise.svg';
import fallArrow from '../../assets/Analytics/ArrowFall.svg';
import Chart from 'chart.js/auto';
import './Analytics.css';
import MapChart from '../MapChart';

const doughnutData = {
  labels: [
    'United States                        30%',
    'Canada                                 25%',
    'Mexico                                  20%',
    'Russia                                  15%',
    'India                                     10%',
  ],
  datasets: [
    {
      // label: 'My First Dataset',
      data: [100, 100, 100, 100, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 0, 0)',
        'rgb(130, 30, 33)',
      ],
      hoverOffset: 4,
    },
  ],
};

const Analytics: FC = () => {
  const datapoints = [1, 6, 4, 7, 10, 20];
  const datapointsCurrent = [2, 5, 3, 2, 11, 15];

  const chartRef: any = useRef(null);
  const barChartRef: any = useRef(null);
  const doughnutChartRef: any = useRef(null);
  // const doughnutRef: any = useRef(null);

  const barData = {
    labels: ['linux', 'windows', 'MacOs', 'Android', 'IOS'],
    datasets: [
      {
        data: [65, 120, 70, 95, 56, 55, 30],
        backgroundColor: [
          '#7357F6',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
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

  const barPlugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart: any, args: any, options: any) => {
      const { ctx } = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#F7F9FB';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };

  const doughnutPlugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart: any, args: any, options: any) => {
      const { ctx } = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#F7F9FB';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };

  useEffect(() => {
    const ctx: any = chartRef?.current?.getContext('2d');
    const bar: any = barChartRef?.current?.getContext('2d');
    const doughnut: any = doughnutChartRef?.current?.getContext('2d');
    // const doughnut: any = doughnutRef?.current?.getContext('2d');

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

    new Chart(bar, {
      type: 'bar',
      data: barData,
      options: {
        datasets: {
          bar: {
            barThickness: 22,
            borderRadius: {
              topRight: 5,
              topLeft: 5,
            },
          },
        },
        layout: {
          padding: 20,
        },
        aspectRatio: 3 / 2,
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Traffic by Device',
            align: 'start',
            color: '#1C1C1C',
            padding: {
              bottom: 20,
            },
            font: {
              size: 14.7,
              weight: 'bold',
            },
          },
          legend: {
            display: false,
          },
        },
        backgroundColor: '#F7F9FB',
        borderColor: 'transparent',
        scales: {
          x: {
            grid: {
              display: false,
            },

            // border: {
            //   display: false,
            // },
          },
          y: {
            border: {
              display: false,
            },
            ticks: {
              stepSize: 100,
            },
            suggestedMin: 0,
            suggestedMax: 300,
          },
        },
      },
      plugins: [barPlugin],
    });

    new Chart(doughnut, {
      type: 'doughnut',
      data: doughnutData,
      options: {
        datasets: {
          doughnut: {
            borderRadius: {
              innerStart: 30,
              outerStart: 30,
              innerEnd: 20,
              outerEnd: 20,
            },
            borderJoinStyle: 'miter',
            spacing: 0,
            // offset: 10,
          },
        },
        layout: {
          padding: 20,
        },
        // clip: { left: 500, top: 3, right: -2, bottom: 0 },
        cutout: '70%',
        radius: '50%',
        rotation: 100,
        aspectRatio: 3 / 2,
        scales: {},
        parsing: {
          key: '',
        },
        plugins: {
          title: {
            display: true,
            text: 'Traffic by Location',
            align: 'start',
            color: '#1C1C1C',
            padding: {
              bottom: 20,
            },
            font: {
              size: 14.7,
              weight: 'bold',
            },
          },
          legend: {
            fullSize: true,
            align: 'center',
            position: 'right',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 30,
              font: {
                size: 12.7,
              },
              color: '#1C1C1C',
              // borderRadius: 1,
              // useBorderRadius: true,
            },
          },
        },
        elements: {
          arc: {},
          point: {
            borderWidth: 10,
            radius: 1,
          },
        },
        // elements: {
        //   line: {
        //     borderWidth: 6,
        //   },
        // },
        // responsive: true,
        // plugins: {
        //   title: {
        //     display: true,
        //   },
        //   legend: {
        //     labels: {
        //       usePointStyle: true,
        //     },
        //   },
        //   tooltip: undefined,
        // },
        // interaction: {
        //   intersect: false,
        // },
        // scales: {
        //   x: {
        //     grid: {
        //       display: false,
        //     },
        //     display: true,
        //     title: {
        //       display: true,
        //     },
        //   },
        //   y: {
        //     display: true,
        //     title: {
        //       display: true,
        //     },
        //     suggestedMin: 0,
        //     suggestedMax: 200,
        //   },
        // },
      },
      plugins: [doughnutPlugin],
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
        <div className="charts_top">
          <div className="line-chart">
            <canvas className="canvas" ref={chartRef} />
          </div>
          <div className="map-chart">
            <MapChart />
          </div>
        </div>

        <div className="charts_bottom">
          <div className="bar-chart">
            <canvas className="canvas" ref={barChartRef} />
          </div>
          <div className="doughnut-chart">
            <canvas className="canvas doughnut_chart" ref={doughnutChartRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
