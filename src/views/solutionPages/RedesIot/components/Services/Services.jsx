import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SkeletonC from '../../../../../svg/components/SkeletonC';
import LazyLoadinComponent from '../../../../../svg/components/LazyLoadingComponent';
import alam from '../../../../../svg/illustrations/iot-3337536_1280.png';
import Card from '@mui/material/Card';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FactoryIcon from '@mui/icons-material/Factory';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';

const Services = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid
        container
        spacing={4}
        marginTop={3}
        direction={isMd ? 'row' : 'row'}
      >
        <Grid item xs={12} md={12} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              <Typography color="primary" variant="inherit" component="span">
                ¿Sabías que existen diferentes entornos donde puedes utilizar
              </Typography>{' '}
              redes IoT?
            </Box>
            <Typography>
              Para que las redes IoT funcionen de manera efectiva, es necesario
              contar con una infraestructura de comunicación robusta y segura,
              así como con sistemas de gestión de datos y análisis para procesar
              la gran cantidad de información generada por los dispositivos
              conectados.
            </Typography>
            <Typography marginTop={1}>
              Además, la seguridad y la privacidad son consideraciones críticas
              en las redes IoT, ya que la interconexión de dispositivos puede
              plantear riesgos de ciberseguridad y de protección de datos si no
              se gestionan adecuadamente.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <List disablePadding>
            {[
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <MapsHomeWorkIcon />
                  </svg>
                ),
                title: 'Hogar inteligente',
                subtitle:
                  'Control de dispositivos como luces, termostatos y cámaras de seguridad a través de aplicaciones móviles.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <LocationCityIcon />
                  </svg>
                ),
                title: 'Ciudades inteligentes',
                subtitle:
                  'Gestión eficiente de recursos, como el monitoreo del tráfico, la gestión de la energía y la recolección de basura.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <LocalHospitalIcon />
                  </svg>
                ),
                title: 'Salud',
                subtitle:
                  'Dispositivos médicos conectados, seguimiento de la salud y telemedicina.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FactoryIcon />
                  </svg>
                ),
                title: 'Industria',
                subtitle:
                  'Monitorización de maquinaria en tiempo real, automatización de procesos de fabricación y mantenimiento predictivo.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FlightTakeoffIcon />
                  </svg>
                ),
                title: 'Logística y transporte',
                subtitle:
                  'Seguimiento de vehículos y mercancías, optimización de rutas y gestión de flotas.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FilterHdrIcon />
                  </svg>
                ),
                title: 'Medio ambiente',
                subtitle:
                  'Monitoreo de la calidad del aire y del agua, seguimiento de la vida silvestre y prevención de desastres naturales.',
              },
            ].map((item, index) => (
              <ListItem key={index} disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    variant={'rounded'}
                    color={theme.palette.primary.dark}
                    bgcolor={`${theme.palette.primary.light}22`}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box maxWidth={600} width={'100%'}>
            {loading ? (
              <SkeletonC heightFrom={100} />
            ) : (
              <Box
                component={Card}
                boxShadow={2}
                height={'100%'}
                width={'100%'}
              >
                <LazyLoadinComponent
                  width={'100%'}
                  height={'100%'}
                  src={alam}
                  title={'...'}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
