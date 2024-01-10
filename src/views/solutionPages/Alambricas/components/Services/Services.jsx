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
import alam from '../../../../../svg/illustrations/alambricas.jpg';
import Card from '@mui/material/Card';
import SpeedIcon from '@mui/icons-material/Speed';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SecurityIcon from '@mui/icons-material/Security';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

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
                ¿Cuáles son los beneficios
              </Typography>{' '}
              de implementar redes alámbricas?
            </Box>
            <Typography component={'p'}>
              El uso de redes alámbricas tiene beneficios claros ya que
              aumenta la agilidad empresarial, disminuye el tiempo de
              inactividad y reduce los gastos operativos de la red, sin
              sacrificar el rendimiento o la confiabilidad ni aumentar los
              costos de la red.
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
                    <SpeedIcon />
                  </svg>
                ),
                title: 'Rapidez',
                subtitle:
                  'Alcanzan velocidades máximas altas que pueden mantener fácilmente.',
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
                    <EngineeringIcon />
                  </svg>
                ),
                title: 'Productividad',
                subtitle:
                  'Asegura que la red no se atascará con tráfico de datos que no sea esencial.',
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
                    <PublishedWithChangesIcon />
                  </svg>
                ),
                title: 'Resiliencia',
                subtitle:
                  'Potencie el futuro del IoT y Wi-Fi 6. Cree una red resiliente y de alto rendimiento que pueda ampliarse y evolucionar con usted',
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
                    <SettingsSuggestIcon />
                  </svg>
                ),
                title: 'Automatización inteligente',
                subtitle:
                  'Modernice la red de su centro de datos con automatización inteligente, análisis distribuidos y una infraestructura siempre conectada.',
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
                    <SecurityIcon />
                  </svg>
                ),
                title: 'Fiabilidad',
                subtitle:
                  'Switches diseñados para redes de pequeñas empresas y oficinas domésticas. Podrá crear una red que disponga de una conectividad fiable y que sea fácil de implementar y gestionar.',
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
                    <MilitaryTechIcon />
                  </svg>
                ),
                title: 'Implementación avanzada',
                subtitle:
                  'Automatice y coordine tareas de configuración de switches tales como editar, implementar y verificar cambios en su red.',
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
