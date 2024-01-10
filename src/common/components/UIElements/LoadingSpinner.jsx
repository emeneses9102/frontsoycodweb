import React from 'react';

import './LoadingSpinner.css';
import { Box } from '@mui/material';

const LoadingSpinner = (props) => {
  return (
    <>
      <Box>
        <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
          <div className="lds-dual-ring"></div>
        </div>
      </Box>
    </>
  );
};

export default LoadingSpinner;
