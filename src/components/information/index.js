import React from 'react';
import Image from '../image';
import './style.scss';

function Information({ author }) {
  if (!author) return null;
  const { name, bio } = author;

  return (
    <div className="information">
      <div className="information-image">
        <Image style={{ width: 180, height: 180, borderRadius: '50%' }} src={bio.thumbnail} alt="profile" />
      </div>
      <div className="information-text">
        <div className="information-name">Minjae Kim(Lian)</div>
        <div className="information-hanja">
          <span><b>珉</b> 옥돌 <b>민</b></span>
          <span><b>材</b> 재목 <b>재</b></span>
        </div>
      </div>
    </div>
  );
}

export default Information;
