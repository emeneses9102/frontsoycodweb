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

import RouterIcon from '@mui/icons-material/Router';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import CellTowerIcon from '@mui/icons-material/CellTower';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';

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
            title: 'Diseño de redes LTE y Site Survey',
            subtitle:
              'Son dos componentes importantes en la planificación y despliegue de redes de comunicaciones móviles de alta velocidad.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <RouterIcon />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              'Planificación de la cobertura',
              'Frecuencias y ancho de banda',
              'Diseño de la red de transporte',
              'Optimización de la red',
            ],
          },
          {
            title: 'Redes LTE para industria del transporte',
            subtitle:
              'Las redes LTE (Long-Term Evolution) para la industria del transporte son redes de comunicaciones móviles basadas en tecnología LTE que se diseñan y despliegan específicamente para satisfacer las necesidades de la industria del transporte, que incluye sectores como el ferrocarril, la aviación, la marina y el transporte por carretera.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <CloudSyncIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'Vehículos de todo tipo',
              'Comunicaciones a bordo',
              'Seguridad vial',
              'Gestión de tráfico',
              'Entrega de contenido en tiempo real',
              'Gestión de flotas y logística',
              'Conectividad a bordo',
            ],
          },
          {
            title: 'Redes definidas por software (SD-WAN)',
            subtitle:
              'Cradlepoint proporciona soluciones de SD-WAN que permiten a las organizaciones optimizar y controlar el tráfico de datos en sus redes, lo que mejora el rendimiento y la eficiencia de las aplicaciones.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <CellTowerIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [
              'Control centralizado',
              'Conectividad múltiple',
              'Optimización de ruta',
              'Seguridad integrada',
            ],
          },
          {
            title: 'Movilidad para branch móvil',
            subtitle:
              'La movilidad para branch móvil se refiere a la capacidad de proporcionar servicios de red y conectividad a sucursales o ubicaciones remotas de una organización utilizando tecnologías y soluciones móviles. ',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <WifiPasswordIcon />
              </svg>
            ),
            color: colors.cyan,
            lessons: [
              'Conectividad móvil',
              'SD-WAN móvil',
              'Seguridad móvil',
              'Administración de Dispositivos Móviles (MDM)',
            ],
          },
          {
            title: 'Planes de datos para conectividad y failover',
            subtitle:
              'Los planes de datos para conectividad son ofertas de servicios de telecomunicaciones que permiten a los usuarios acceder a Internet y utilizar datos móviles en sus dispositivos, como smartphones, tabletas, módems USB o dispositivos IoT (Internet de las cosas).',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <PodcastsIcon />
              </svg>
            ),
            color: colors.deepOrange,
            lessons: ['Telcel', 'AT&T', 'Altan'],
          },
          {
            title: 'IoT para movilidad con enlace celulares',
            subtitle:
              'Se trata de dispositivos IoT que utilizan conexiones celulares, como 4G o 5G, para transmitir datos y comunicarse con sistemas centralizados o con otros dispositivos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <TapAndPlayIcon />
              </svg>
            ),
            color: colors.purple,
            lessons: [
              'Herramientas de diagnóstico',
              'Alertas configurables',
              'Métricas de rendimiento',
              'Visualización de datos',
            ],
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
