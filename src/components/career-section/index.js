import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

function CareerSection({ career }) {
  const items = (career || []).filter((item) => item.title);
  if (items.length === 0) return null;
  return (
    <div className="career-section">
      <SectionHeader title="Career" />
      <div className="body">
        {items.map((item, index) => (
          <div className="career-item" key={index}>
            <div className="date">{item.date}</div>
            <div className="content">
              <div className="title">{item.title}</div>
              {item.description && <div className="description">{item.description}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerSection;
