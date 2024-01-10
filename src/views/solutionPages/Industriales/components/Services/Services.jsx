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
import alam from '../../../../../svg/illustrations/ironworks-4318497_1280.jpg';
import Card from '@mui/material/Card';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

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
                ¿Qué beneficios obtengo
              </Typography>{' '}
              de implementar redes industriales?
            </Box>
            <Typography component={'p'}>
              Ofrecen una serie de beneficios clave que las hacen fundamentales
              en entornos industriales y de fabricación. Aquí tienes algunos de
              los principales beneficios de las redes industriales:
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
                    <VolunteerActivismIcon />
                  </svg>
                ),
                title: 'Confiabilidad',
                subtitle:
                  'Operan de manera continua en entornos industriales adversos y críticos, minimizando el tiempo de inactividad no planificado y garantizando la disponibilidad de sistemas y procesos.',
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
                    <ScheduleSendIcon />
                  </svg>
                ),
                title: 'Comunicación en tiempo real',
                subtitle:
                  'Optimizadas para proporcionar latencias bajas y tiempos de respuesta predecibles, lo que es esencial en la automatización industrial.',
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
                    <WifiPasswordIcon />
                  </svg>
                ),
                title: 'Seguridad',
                subtitle:
                  'Estas redes suelen incorporar protocolos y medidas de seguridad avanzados para proteger contra amenazas y accesos no autorizados.',
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
                    <ThunderstormIcon />
                  </svg>
                ),
                title: 'Diseño robusto',
                subtitle:
                  'Diseñadas para soportar condiciones adversas, como temperaturas extremas, vibraciones, humedad y presencia de sustancias químicas.',
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
                    <OfflineBoltIcon />
                  </svg>
                ),
                title: 'Eficiencia energética',
                subtitle:
                  'Esto es importante en aplicaciones donde la gestión de la energía es crítica para la sostenibilidad y la eficiencia de costos.',
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
                    <OpenInFullIcon />
                  </svg>
                ),
                title: 'Escalabilidad',
                subtitle:
                  'Pueden crecer y adaptarse a medida que las necesidades cambian con el tiempo. Esto permite agregar nuevos dispositivos y componentes de red de manera fácil y eficiente sin interrumpir las operaciones existentes.',
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
