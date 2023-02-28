import React, { FC } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#9D8AF8' : '#9D8AF8',
  },
}));

const markers = [
  {
    name: 'England',
    text: '100k',
    value: 100,
  },
  {
    name: 'Singapore',
    text: '90k',
    value: 90,
  },
  {
    name: 'Sydney',
    text: '80k',
    value: 80,
  },
  {
    name: 'Michigan',
    text: '60k',
    value: 60,
  },
  {
    name: 'England',
    text: '100k',
    value: 100,
  },
  {
    name: 'Singapore',
    text: '90k',
    value: 90,
  },
  {
    name: 'Sydney',
    text: '80k',
    value: 80,
  },
  {
    name: 'Michigan',
    text: '60k',
    value: 60,
  },
];

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const MapChart: FC = () => {
  return (
    <div>
      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{
          scale: 800,
        }}
      >
        <Geographies geography={geoUrl}>
          {(item: any) =>
            item.geographies.map((geo: any) => (
              <Geography fill="#7357F614" stroke="#FFF" key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[-74.006, 40.7128]}>
          <circle r={8} fill="#000" stroke="#fff" strokeWidth={3} />
        </Marker>
        <Marker coordinates={[-70.006, 35.7128]}>
          <circle r={8} fill="#000" stroke="#fff" strokeWidth={3} />
        </Marker>
      </ComposableMap>
      <div className="map_progress_container">
        {markers?.map(({ name, text, value }) => (
          <div className="map_progress_content" key={name}>
            <div className="map_progress">
              <div>{name}</div>
              <div>{text}</div>
            </div>
            <BorderLinearProgress variant="determinate" value={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapChart;
