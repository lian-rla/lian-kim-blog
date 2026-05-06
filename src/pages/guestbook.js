import React from 'react';
import Layout from '../layout';
import Seo from '../components/seo';
import Guestbook from '../components/guestbook';
import CategoryPageHeader from '../components/category-page-header';

function GuestbookPage() {
  return (
    <Layout>
      <Seo title="Guestbook" />
      <CategoryPageHeader title="Guestbook" subtitle="방명록" />
      <Guestbook />
    </Layout>
  );
}

export default GuestbookPage;
