import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Webbee = ({ width = 45, height = 70 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimaryDark = theme.palette.primary.main;
  return (
    <>
      <svg viewBox="-20 -20 50 50" xmlns="http://www.w3.org/2000/svg">
      <img
            to="/"
            sx={{ mt: 1 }}
            component={NavLink}
            height={'150%'}
            width={'100%'}
            src="https://d117ffkp1c6hyc.cloudfront.net/images/logo-sycod-header.png"
          />
      </svg>
    </>
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
