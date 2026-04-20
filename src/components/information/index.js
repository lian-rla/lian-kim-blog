import React from 'react';
import Image from '../image';
import './style.scss';

function Information({ author }) {
  if (!author) return null;
  const { name, bio } = author;

  return (
    <div className="information">
      <div className="information-meta">
        {bio.email && (
          <div className="information-meta-item">
            <span className="meta-icon">✉</span>
            <span>{bio.email}</span>
          </div>
        )}
        {bio.residence && (
          <div className="information-meta-item">
            <span className="meta-icon">📍</span>
            <span>{bio.residence}</span>
          </div>
        )}
        {bio.bachelorDegree && (
          <div className="information-meta-item">
            <span className="meta-icon">🎓</span>
            <span>{bio.bachelorDegree}</span>
          </div>
        )}
      </div>
      <div className="information-profile">
        <div className="information-image">
          <Image style={{ width: 180, height: 180, borderRadius: '50%' }} src={bio.thumbnail} alt="profile" />
        </div>
        <div className="information-text">
          <div className="information-name">{name}</div>
          <div className="information-hanja">
            <span>珉 옥돌 <b>민</b></span>
            <span>材 재목 <b>재</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
