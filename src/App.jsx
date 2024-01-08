// App.jsx
import React from 'react';
import { SharedProvider } from './SharedContext.jsx';
import Navbar from './components/Navbar/navbar.jsx'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/footer.jsx';

const App = () => {
  return (
    <SharedProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </SharedProvider>
  );
};

export default App;
