import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import LoadingSpinner from '../../../../../common/components/UIElements/LoadingSpinner';
import Form from '../../components/Form';
const baseUrl = 'https://192.168.1.25:4000/api/event';

const Hero = () => {
  const shouldLog = useRef(true);
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvents, setLoadedEvents] = useState([]);
  const [activeForm, setActiveForm] = useState(false);
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
  const gridSizeTitle = isXl
    ? 4
    : isLg
    ? 1
    : isMd
    ? 1
    : isSm
    ? 1
    : isxS
    ? 1
    : 4;
  const gridSizeCard = isXl
    ? '105%'
    : isLg
    ? '102%'
    : isMd
    ? '100%'
    : isSm
    ? '94%'
    : isxS
    ? '100%'
    : '105%';

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      axios
        .get(`${baseUrl}/neweventlist`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          timeout: 10000,
          credentials: 'include',
          mode: 'cors',
          maxRedirects: 5,
          decompress: true,
        })
        .then((response) => {
          console.log(response);
          setIsLoading(false);
          setLoadedEvents(response.data.eventList);
        })
        .catch((error) => {
          console.log(error.message);
          setIsLoading(false);
          setLoadedEvents([]);
        })
        .finally(function () {
          setIsLoading(false);
          setLoadedEvents([]);
        });
    }
  }, []);

  const showForm = () => {
    setActiveForm(false);
  };
  return (
    <Box>
      <Grid container spacing={gridSizeTitle}>
        {isLoading ? (
          <Box display="flex" alignItems="center">
            <LoadingSpinner />
          </Box>
        ) : (
          <Box width={1} height="100%" display="flex" alignItems="center">
            {loadedEvents.length >0 ? (
              loadedEvents.map((item, i) => (
                <Box
                  key={i}
                  width={1}
                  height="100%"
                  display="flex"
                  alignItems="center"
                >
                  <Grid item xs={12} md={6} xl={12} lg={12}>
                    <Box>
                      <Typography
                        component="h1"
                        variant="h2"
                        align="left"
                        gutterBottom
                        sx={{
                          color: theme.palette.common.white,
                          fontWeight: 900,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box>
                        <Typography
                          variant="h6"
                          component="p"
                          sx={{
                            color: theme.palette.common.white,
                            fontWeight: 400,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} xl={12} lg={12}>
                    {activeForm ? (
                      <Box
                        width={1}
                        height="100%"
                        display="flex"
                        alignItems="center"
                      >
                        <Grid item xs={12} md={6}>
                          <Box
                            padding={{ xs: 3, sm: 6 }}
                            width={'100%'}
                            component={Card}
                            borderRadius={2}
                            boxShadow={4}
                          >
                            <Box
                              display="flex"
                              flexDirection={'row'}
                              justifyContent={'center'}
                            >
                              <Box
                                display="flex"
                                flexDirection={'column'}
                                alignItems={'center'}
                              >
                                <Form setNameEvent={item.title} flag={true} />
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      </Box>
                    ) : (
                      <Box
                        padding={{ xs: 3, sm: 6 }}
                        width={'100%'}
                        component={Card}
                        borderRadius={2}
                        boxShadow={4}
                      >
                        <Box
                          display="flex"
                          flexDirection={'row'}
                          justifyContent={'center'}
                        >
                          <Box
                            display="flex"
                            flexDirection={'column'}
                            alignItems={'center'}
                          >
                            <Typography
                              variant={'h4'}
                              sx={{
                                fontWeight: 900,
                              }}
                            >
                              {item.days}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                marginTop: 3,
                              }}
                            >
                              Obten todos los detalles al registrarte
                            </Typography>
                          </Box>
                        </Box>
                        <Box marginTop={4}>
                          <Button
                            sx={{ height: 54 }}
                            variant="contained"
                            color="primary"
                            size="medium"
                            fullWidth
                            onClick={showForm}
                          >
                            Deseo asistir
                          </Button>
                        </Box>
                      </Box>
                    )}
                  </Grid>
                </Box>
              ))
            ) : (
              <Box width={1} height="100%" display="flex" alignItems="center">
                <Grid item xs={2} sm={4} md={4} lg={12} xl={12}> 
                  <Box>
                    <Typography
                      component="h1"
                      variant="h2"
                      align="left"
                      gutterBottom
                      sx={{
                        color: theme.palette.common.white,
                        fontWeight: 600,
                      }}
                    >
                      ¿Qué te gustaría conocer en el próximo evento?
                    </Typography>
                    <Box>
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          color: theme.palette.common.white,
                          fontWeight: 400,
                          marginRight: 2,
                        }}
                      >
                        Al compartirnos tus temas de interés fortalecemos la
                        experiencia de los participantes.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={10} sm={8} md={8} lg={12} xl={12}>
                  {activeForm ? (
                    <Box
                      width={1}
                      height="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <Box
                        padding={{ xs: 3, sm: 6 }}
                        width={'100%'}
                        component={Card}
                        borderRadius={2}
                        boxShadow={4}
                      >
                        <Box
                          display="flex"
                          flexDirection={'row'}
                          justifyContent={'center'}
                        >
                          <Box
                            display="flex"
                            flexDirection={'column'}
                            alignItems={'center'}
                          >
                            <Form
                              setNameEvent={'Notificacion sin evento'}
                              flag={false}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      width={1}
                      height="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <Grid item xs={12} md={6}></Grid>
                      <Box
                        padding={{ xs: 3, sm: 6 }}
                        width={'100%'}
                        component={Card}
                        borderRadius={2}
                        boxShadow={4}
                      >
                        <Box
                          display="flex"
                          flexDirection={'row'}
                          justifyContent={'center'}
                        >
                          <Box
                            display="flex"
                            flexDirection={'column'}
                            alignItems={'center'}
                          >
                            <Form
                              setNameEvent={'Notificacion sin evento'}
                              flag={false}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Box>
            )}
          </Box>
        )}
      </Grid>
    </Box>
  );
};
export default Hero;
