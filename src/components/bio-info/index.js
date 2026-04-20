import React from 'react';
import './style.scss';

function BioInfo({ bio }) {
  if (!bio) return null;
  const { email, residence, bachelorDegree } = bio;

  const items = [
    { key: 'Email', value: email },
    { key: 'Residence', value: residence },
    { key: 'Bachelor Degree', value: bachelorDegree },
  ].filter((item) => item.value);

  return (
    <div className="bio-info">
      {items.map(({ key, value }) => (
        <div className="bio-info-item" key={key}>
          <strong>{key}.</strong> {value}
        </div>
      ))}
    </div>
  );
}

export default BioInfo;
