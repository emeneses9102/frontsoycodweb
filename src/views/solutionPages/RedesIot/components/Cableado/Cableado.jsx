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
import cableado from '../../../../../svg/illustrations/network-782707_1280.png';
import Card from '@mui/material/Card';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import HubIcon from '@mui/icons-material/Hub';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

const Cableado = () => {
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
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              <Typography color="primary" variant="inherit" component="span">
                ¿Cuáles son los beneficios
              </Typography>{' '}
              de utilizar redes IoT?
            </Typography>
            <Typography marginTop={1}>
              La infraestructura de la empresa debe de ser capaz de permitir los
              diferentes requerimientos de conexión para el despliegue masivo de
              dispositivos IoT ya que estos aprovechan una variedad de
              diferentes tipos de conectividad y comunicación. Con los cuales
              podemos obtener beneficios como son los siguientes:
            </Typography>
          </Box>
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
                  src={cableado}
                  title={'...'}
                />
              </Box>
            )}
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
                    <WifiPasswordIcon />
                  </svg>
                ),
                title: 'Seguridad altamente fiable',
                subtitle:
                  'La seguridad siempre está en el centro de la atención cuando se trata de IoT ya que muchos dispositivos de IoT son fundamentalmente poco fiables, y la falta de visibilidad genera mayor riesgo, para mitigar este tipo de cuestiones es necesario contar con una solución integral para su Red en general que contemple dispositivos IoT que su empresa necesita para la correcta operación del negocio.',
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
                    <HubIcon />
                  </svg>
                ),
                title: 'Gestión centralizada',
                subtitle:
                  'Gestione y supervise todos sus Sensores, dispositivos móviles y adaptadores colocados en vehículos y/o sucursales en tiempo real y proporcione una experiencia de usuario coherente con la misión del negoció.',
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
                    <TroubleshootIcon />
                  </svg>
                ),
                title: 'Monitoreo en tiempo real ',
                subtitle:
                  'Visualice sus datos de IoT y obtenga información estratégica con una fácil integración a las plataformas de aplicaciones y análisis de IoT, que le permiten operar su negocio con confianza y eficiencia.',
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
      </Grid>
    </Box>
  );
};

export default Cableado;
