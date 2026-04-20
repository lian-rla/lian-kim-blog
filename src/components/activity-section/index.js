import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

function ActivitySection({ activity }) {
  if (!activity || activity.length === 0) return null;
  return (
    <div className="activity-section">
      <SectionHeader title="Activity" />
      <div className="body">
        {activity.map((item, index) => (
          <div className="activity-item" key={index}>
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

export default ActivitySection;
