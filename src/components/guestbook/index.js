import React, { useState, useEffect } from 'react';
import supabase from '../../lib/supabase';
import './style.scss';

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  }

  return (
    <div className="guestbook">
      <p className="guestbook-desc">자유롭게 방명록을 작성해주세요 :)</p>

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
                <span className="entry-date">{formatDate(entry.created_at)}</span>
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
