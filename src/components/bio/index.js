import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import BuyMeACoffee from '../buy-me-a-coffee';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      {language === 'ko' ? (
        <div className="introduction korean">
          <p className="title">
            안녕하세요!
            <br />
            <strong><ReactRotatingText items={bio.description} /></strong>를 좋아하는
            <br />
            개발자 <strong><ReactRotatingText items={['김민재', 'Lian']} /></strong>입니다.
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
            <BuyMeACoffee />
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{name}</strong>
            .<br />
          </p>
          <p className="description">
            I'm a {bio.role} <ReactRotatingText items={bio.description} />
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
      <div className="thumbnail-wrapper">
        <Image style={{ width: 320, height: 440 }} src="profile-bio.png" alt="thumbnail" />
        <div className="thumbnail-links">
          {social?.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="thumbnail-link">github</a>
          )}
          {social?.resume && (
            <a href={social.resume} target="_blank" rel="noopener noreferrer" className="thumbnail-link">resume</a>
          )}
          {social?.legacyBlog && (
            <a href={social.legacyBlog} target="_blank" rel="noopener noreferrer" className="thumbnail-link">legacy blog</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bio;
