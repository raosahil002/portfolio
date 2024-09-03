import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import nightsky from '../../lottieFiles/night-sky.json';
import { HashLoader } from 'react-spinners';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import MoveToTop from '../../components/MoveToTop'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader
            color={'#9067C6'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>

          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bg-two" animationData={nightsky} loop={true} />
          <Lottie className="bg-temp" animationData={nightsky} loop={true} />

          <Navbar />
          <MoveToTop />

          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
