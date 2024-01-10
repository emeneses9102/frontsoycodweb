import React from 'react';

import './LoadingSpinner.css';
import { Box, Container } from '@mui/material';

const LoadingSpinner = (props) => {
  return (
    <>
      <Box
        sx={{ alignContent: 'center', alignItems: 'center', display: 'flex' }}
      >
        <Container xs={12} xl={12} lg={12} >
        <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
          <div className="lds-dual-ring"></div>
        </div>
        </Container>
      </Box>
    </>
  );
};

export default LoadingSpinner;
