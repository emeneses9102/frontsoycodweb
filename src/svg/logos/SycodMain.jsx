import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SkeletonC from '../components/SkeletonC';
import LazyLoadingComponent from '../components/LazyLoadingComponent';

const Webbee = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isxS = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const definitiveHeight = isXl
    ? '105%'
    : isLg
    ? '102%'
    : isMd
    ? '100%'
    : isSm
    ? '90%'
    : isxS
    ? '98%'
    : '105%';
  const definitiveWidth = isXl
    ? '95%'
    : isLg
    ? '96%'
    : isMd
    ? '88%'
    : isSm
    ? '98%'
    : isxS
    ? '92%'
    : '95%';
  return (
    <>
      {loading ? (
        <SkeletonC heightFrom={100} />
      ) : (
        <Box
          display={'flex'}
          alignItems="center"
          component="a"
          underline="none"
          href="/"
          title="SYCOD"
          height={{ xs: 28, sm: 40, md: 32, lg: 40, xl: 40 }}
          width={{ xs: 100, sm: 100, md: 120, lg: 136, xl: 142 }}
        >
          <LazyLoadingComponent
            height={definitiveHeight}
            width={definitiveWidth}
            src={`https://d117ffkp1c6hyc.cloudfront.net/images/${
              theme.palette.mode === 'light'
                ? 'logo-sycod-gris'
                : 'logo-sycod-blanco'
            }.png`}
            title={'logo corporativo sycod'}
          />
        </Box>
      )}
    </>
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
