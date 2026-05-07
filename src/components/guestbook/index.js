import React, { useState, useEffect } from 'react';
import supabase from '../../lib/supabase';
import './style.scss';

const ADMIN_PASSWORD = process.env.GATSBY_ADMIN_PASSWORD;

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    setLoading(true);
    const { data } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });
    setEntries(data || []);
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    await supabase.from('guestbook').insert([{ name: name.trim(), message: message.trim() }]);
    setName('');
    setMessage('');
    await fetchEntries();
    setSubmitting(false);
  }

  async function handleDelete(id) {
    await supabase.from('guestbook').delete().eq('id', id);
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function handleAdminLogin(e) {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowLogin(false);
      setPasswordInput('');
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  }

  function handleAdminLogout() {
    setIsAdmin(false);
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  }

  return (
    <div className="guestbook">
      <div className="guestbook-top">
        <p className="guestbook-desc">자유롭게 방명록을 작성해주세요 :)</p>
        {isAdmin ? (
          <button className="admin-toggle active" onClick={handleAdminLogout}>잠금</button>
        ) : (
          <button className="admin-toggle" onClick={() => setShowLogin(true)}>관리</button>
        )}
      </div>

      {showLogin && (
        <div className="admin-overlay" onClick={() => { setShowLogin(false); setPasswordInput(''); setLoginError(false); }}>
          <form className="admin-modal" onClick={(e) => e.stopPropagation()} onSubmit={handleAdminLogin}>
            <p className="admin-modal-title">관리자 확인</p>
            <input
              className="guestbook-input"
              type="password"
              placeholder="비밀번호"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setLoginError(false); }}
              autoFocus
            />
            {loginError && <p className="admin-error">비밀번호가 틀렸습니다.</p>}
            <div className="admin-modal-buttons">
              <button type="button" className="admin-cancel" onClick={() => { setShowLogin(false); setPasswordInput(''); setLoginError(false); }}>취소</button>
              <button type="submit" className="guestbook-submit">확인</button>
            </div>
          </form>
        </div>
      )}

      <form className="guestbook-form" onSubmit={handleSubmit}>
        <input
          className="guestbook-input"
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          required
        />
        <textarea
          className="guestbook-textarea"
          placeholder="메시지를 남겨주세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={300}
          rows={3}
          required
        />
        <button className="guestbook-submit" type="submit" disabled={submitting}>
          {submitting ? '등록 중...' : '남기기'}
        </button>
      </form>

      <div className="guestbook-list">
        {loading ? (
          <p className="guestbook-empty">불러오는 중...</p>
        ) : entries.length === 0 ? (
          <p className="guestbook-empty">첫 번째 방명록을 남겨주세요!</p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="guestbook-entry">
              <div className="entry-header">
                <span className="entry-name">{entry.name}</span>
                <div className="entry-header-right">
                  <span className="entry-date">{formatDate(entry.created_at)}</span>
                  {isAdmin && (
                    <button className="entry-delete" onClick={() => handleDelete(entry.id)}>삭제</button>
                  )}
                </div>
              </div>
              <p className="entry-message">{entry.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Guestbook;
