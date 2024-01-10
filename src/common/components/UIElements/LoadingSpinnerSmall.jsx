import React, { useState, useEffect } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const LoadingSpinner = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <>
        <ClimbingBoxLoader
          size={15}
          color={'#1769aa'}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </>
  );
};

export default LoadingSpinner;
