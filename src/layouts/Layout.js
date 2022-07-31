import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

import Main from './Main/Main';

export default function Layout({ children }) {
  const [isDrawerDisplayed, setIsDrawerDisplayed] = useState(false);

  return (
    <React.Fragment>
      <Navbar setIsDrawerDisplayed={setIsDrawerDisplayed} />
      <Sidebar
        isDrawerDisplayed={isDrawerDisplayed}
        setIsDrawerDisplayed={setIsDrawerDisplayed}
      />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
}
