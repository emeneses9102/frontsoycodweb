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
import alam from '../../../../../svg/illustrations/iot-4085382_1280.jpg';
import Card from '@mui/material/Card';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SavingsIcon from '@mui/icons-material/Savings';
import EngineeringIcon from '@mui/icons-material/Engineering';

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
              de implementar redes inalámbricas?
            </Box>
            <Typography component={'p'}>
              Para ofrecer la máxima velocidad de conexión con las garantías más
              altas para que, tanto clientes como empleados, obtengan una
              excelente experiencia de usuario. Los puntos de acceso con WIFI 6
              son lo que debería considerar para su negocio ya que no solo
              ofrecerá velocidades más altas, sino que permitirá nuevos
              servicios comerciales y casos de uso, que incluyen:
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
                    <DirectionsRunIcon />
                  </svg>
                ),
                title: 'Movilidad',
                subtitle:
                  'Los dispositivos pueden conectarse y comunicarse sin estar atados por cables.',
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
                    <GpsFixedIcon />
                  </svg>
                ),
                title: 'Flexibilidad de ubicación',
                subtitle:
                  'Facilita la ubicación de dispositivos en lugares convenientes, sin tener que preocuparse por la infraestructura de cables.',
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
                    <FileDownloadIcon />
                  </svg>
                ),
                title: 'Facilidad de instalación',
                subtitle:
                  'No se requieren cables largos ni perforaciones en las paredes, lo que reduce los costos y el tiempo de implementación.',
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
                  'Agregar fácilmente nuevos dispositivos a la red sin la necesidad de cableado adicional',
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
                title: 'Ahorro de costos en infraestructura',
                subtitle:
                  'Eliminar la necesidad de invertir en cables y sus accesorios asociados, lo que puede ahorrar dinero a largo plazo.',
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
