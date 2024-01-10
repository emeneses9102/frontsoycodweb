import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Gallery from '../GalleryQuery';
import axios from 'axios';
import LoadingSpinner from '../../../../../common/components/UIElements/LoadingSpinnerSmall';
const baseUrl = 'https://www.sycod.com/api/event';

const Hero = ({ nameEventQuery }) => {
  const theme = useTheme();

  const shouldLog = useRef(true);

  const [loadedEvents, setLoadedEvents] = useState(null);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      axios
        .get(`${baseUrl}/listevent`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          timeout: 10000,
          credentials: 'include',
          mode: 'cors',
          maxRedirects: 5,
          decompress: true,
          params: {
            nameEvent: nameEventQuery,
          },
        })
        .then((response) => {
          setLoadedEvents(response.data.eventLoaded);
        })
        .catch((error) => {
          setLoadedEvents(null);
        })
        .finally(function () {
          // setLoadedEvents(null);
        });
    }
  }, []);

  return (
    <Box>
      {loadedEvents != null ? (
        <Grid container spacing={4}>
          <Grid item container alignItems={'center'} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'secondary'}
              >
                {loadedEvents.title}
              </Typography>
              <Box marginBottom={2}>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {loadedEvents.text1}
                  <br />{' '}
                  <Typography
                    color={'primary'}
                    component={'span'}
                    variant={'inherit'}
                  >
                    {loadedEvents.text2}
                  </Typography>
                  <br />{' '}
                  <Typography
                    color={'primary'}
                    component={'span'}
                    variant={'inherit'}
                  >
                    {loadedEvents.text3}
                  </Typography>
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="textSecondary">
                  {loadedEvents.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              height={'100%'}
              width={'100%'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box height={'100%'} width={'100%'} maxHeight={500}>
                <Gallery
                  objectPictures={loadedEvents.pictures}
                  titlePicture={loadedEvents.title}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <LoadingSpinner />
      )}
    </Box>
  );
};

export default Hero;
