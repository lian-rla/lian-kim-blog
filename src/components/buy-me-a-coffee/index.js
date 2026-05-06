import React, { useState } from 'react';
import './style.scss';

function BuyMeACoffee() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="bmc-button" onClick={() => setOpen(true)}>
        ☕ Buy me a coffee
      </button>

      {open && (
        <div className="bmc-overlay" onClick={() => setOpen(false)}>
          <div className="bmc-modal" onClick={(e) => e.stopPropagation()}>
            <button className="bmc-close" onClick={() => setOpen(false)}>✕</button>
            <p className="bmc-title">카카오페이로 응원하기 💛</p>
            <img className="bmc-qr" src="/kakao-qr.jpg" alt="kakao pay qr" />
            <p className="bmc-desc">QR 코드를 스캔해주세요</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BuyMeACoffee;
