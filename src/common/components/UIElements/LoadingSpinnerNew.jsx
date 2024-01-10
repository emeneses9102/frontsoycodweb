import React, { useState, useEffect } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import './LoadingSpinnerNew.css';

const LoadingSpinner = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      <div className="sweet-loading">
        <ClimbingBoxLoader
          size={30}
          color={'#1769aa'}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default LoadingSpinner;
