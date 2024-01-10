import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { colors } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactoryIcon from '@mui/icons-material/Factory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import VideocamIcon from '@mui/icons-material/Videocam';

const Overview = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Potencia tu éxito con nuestros servicios profesionales
        </Box>
        <Typography align={'center'} color="textSecondary" variant={'h6'}>
          Diseñamos y desarrollamos increíbles soluciones para todo tipo de
          empresas.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {[
          {
            title: 'Telemetría para el sector transporte',
            subtitle:
              'Sistemas utilizados para recopilar datos y métricas relacionadas con vehículos y su operación, y luego transmitir estos datos a un sistema central para su análisis y supervisión.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <LocalShippingIcon />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              'GPS',
              'Monitoreo de combustible',
              'Hábitos de conducción',
              'Temperatura',
            ],
          },
          {
            title: 'Telemetría para industrias 4.0',
            subtitle:
              'Recopilación y transmisión de datos en tiempo real desde sensores, dispositivos y máquinas industriales a sistemas de control y análisis, utilizando tecnologías avanzadas de comunicación y sensores. ',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <FactoryIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'Motores',
              'Plantas',
              'Automatización',
              'Líneas de producción',
            ],
          },
          {
            title: 'Monitoreo de dispositivos en manufactura',
            subtitle:
              'Supervisar y rastrear el rendimiento y el estado de los dispositivos y equipos utilizados en procesos de fabricación.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <PrecisionManufacturingIcon />
              </svg>
            ),
            color: colors.amber,
            lessons: [
              'Sistemas de control',
              'Sistemas de energía',
              'Plantas',
              'Celdas solares',
              'Tableros eléctricos',
            ],
          },
          {
            title: 'Telemetría para raestreos y recuperación de vehículos',
            subtitle:
              'La telemetría de seguimiento de ubicación permite obtener información precisa sobre la posición geográfica de un elemento y puede ser esencial en una variedad de aplicaciones, desde la gestión de flotas hasta la seguridad personal y la logística.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <NotListedLocationIcon />
              </svg>
            ),
            color: colors.cyan,
            lessons: [],
          },
          {
            title: 'Inteligencia artificial por CCTV',
            subtitle:
              'La inteligencia artificial (IA) aplicada a sistemas de circuito cerrado de televisión (CCTV) se refiere a la integración de tecnologías de IA en sistemas de videovigilancia y cámaras de seguridad para mejorar la capacidad de detección, análisis y respuesta en situaciones de vigilancia y seguridad. ',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <VideocamIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [],
          },
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Grid
              container
              spacing={isMd ? 4 : 2}
              flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}
            >
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-right' : 'fade-up'}
              >
                <Box
                  component={Card}
                  display={'flex'}
                  alignItems={'center'}
                  width={'100%'}
                  height={'100%'}
                  bgcolor={item.color[themeMode === 'light' ? 50 : 900]}
                  boxShadow={0}
                >
                  <CardContent>
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={6}
                      bgcolor={item.color[themeMode === 'light' ? 900 : 50]}
                      boxShadow={4}
                    >
                      <Box color={item.color[themeMode === 'light' ? 50 : 900]}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-left' : 'fade-up'}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  width={'100%'}
                  height={'100%'}
                >
                  <Box marginBottom={2}>
                    <Box
                      component={Typography}
                      variant={'h4'}
                      gutterBottom
                      fontWeight={600}
                    >
                      {item.title}
                    </Box>
                  </Box>
                  <Grid container spacing={1}>
                    {item.lessons.map((lesson, j) => (
                      <Grid item xs={12} key={j}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={'auto'}
                          padding={0}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={'auto !important'}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={theme.palette.secondary.main}
                              width={20}
                              height={20}
                            >
                              <svg
                                width={12}
                                height={12}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <ListItemText primary={lesson} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Overview.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Overview;
