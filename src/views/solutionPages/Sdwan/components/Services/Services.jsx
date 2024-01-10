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
import alam from '../../../../../svg/illustrations/cloud-3805852_1280.png';
import Card from '@mui/material/Card';
import HubIcon from '@mui/icons-material/Hub';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import BalanceIcon from '@mui/icons-material/Balance';
import SavingsIcon from '@mui/icons-material/Savings';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

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
              de implementar SD-WAN?
            </Box>
            <Typography component={'p'}>
              SD-WAN agrega diversos enlaces de red, como banda ancha, Enlace
              dedicado y LTE. Estos enlaces se pueden agregar al MPLS existente
              para crear una red híbrida, o pueden ser una alternativa a mejor
              costo y mayor ancho de banda que MPLS al usar todas las conexiones
              a Internet cableadas e inalámbricas.
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
                    <HubIcon />
                  </svg>
                ),
                title: 'Centralización y orquestación',
                subtitle:
                  'Permite a las empresas controlar y administrar su red WAN desde una ubicación centralizada a través de una interfaz de administración basada en software. Esto simplifica la configuración y el monitoreo de la red.',
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
                    <AutoGraphIcon />
                  </svg>
                ),
                title: 'Optimización de tráfico',
                subtitle:
                  'SD-WAN puede identificar automáticamente el tipo de tráfico y seleccionar la mejor ruta para que los datos viajen a través de la red, lo que mejora la eficiencia y el rendimiento.',
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
                    <SettingsInputComponentIcon />
                  </svg>
                ),
                title: 'Uso de múltiples conexiones',
                subtitle:
                  ' SD-WAN puede aprovechar múltiples tipos de conexiones, como líneas de Internet de banda ancha, líneas dedicadas y conexiones móviles, para optimizar el tráfico y aumentar la disponibilidad de la red.',
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
                    <BalanceIcon />
                  </svg>
                ),
                title: 'Balanceo de carga',
                subtitle:
                  'Distribuye el tráfico de manera equitativa entre múltiples enlaces de red para evitar congestiones y mejorar el rendimiento.',
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
                    <SavingsIcon />
                  </svg>
                ),
                title: 'Ahorro de Costos',
                subtitle:
                  'Al permitir el uso de conexiones de Internet de menor costo y al optimizar el tráfico, SD-WAN puede ayudar a reducir los gastos en servicios de comunicación.',
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
                title: 'Resiliencia',
                subtitle:
                  'Proporciona capacidades de recuperación ante fallos, de modo que si una conexión se cae, el tráfico se puede redirigir automáticamente a través de otra conexión disponible.',
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
