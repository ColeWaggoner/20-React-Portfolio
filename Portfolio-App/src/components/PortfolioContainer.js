import React, { useState } from 'react';
import About from './pages/AboutMe';
import Port from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';
import Navigation from './Header';

export default function PortfolioContainer() {
  const [Page, setPage] = useState('Home');

  const pageSelect = () => {
    if (Page === 'About') {
      return <About />;
    }
    if (Page === 'Portfolio') {
      return <Port />;
    }
    if (Page === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const pageChange = (page) => setPage(page);

  return (
    <div>
      <Navigation currentPage={Page} pageChange={pageChange} />
      {pageSelect()}
      <Footer />
    </div>
  );
}
