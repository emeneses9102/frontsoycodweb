import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SkeletonC from '../../../../../svg/components/SkeletonC';

const JustMap = ({ themeMode = 'light' }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Box marginY={4}>
        {loading ? (
          <SkeletonC heightFrom={300} />
        ) : (
          <Box
            component={'iframe'}
            borderRadius={2}
            minHeight={400}
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1303412863685!2d-99.18522172400137!3d19.3635081428822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8c5c713433%3A0x7ec2928a9026e734!2sSYCOD%20(Sistemas%20Y%20Computadores%20Digitales%20Sa%20De%20Cv)!5e0!3m2!1ses-419!2smx!4v1689186050036!5m2!1ses-419!2smx"
            sx={{
              filter:
                themeMode === 'dark' ? 'grayscale(0.5) opacity(0.7)' : 'none',
            }}
          />
        )}
      </Box>
    </>
  );
};

export default JustMap;
