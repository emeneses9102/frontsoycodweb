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
import alam from '../../../../../svg/illustrations/almacenamiento-san.jpg';
import Card from '@mui/material/Card';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import TerminalIcon from '@mui/icons-material/Terminal';


const Services3 = () => {
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
              Soluciones internet de las cosas para 
              </Typography>{' '}
              indsutria 4.0
            </Box>
            <Typography component={'p'}>
              El almacenamiento SAN ofrece varias ventajas que lo hacen una
              opción atractiva para muchas empresas, especialmente aquellas que
              tienen requisitos de rendimiento y alta disponibilidad para sus
              aplicaciones y datos críticos. Aquí están algunas de las ventajas
              clave del almacenamiento SAN:
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
                    <AutoGraphIcon />
                  </svg>
                ),
                title: 'Rendimiento superior',
                subtitle:
                  'Una de las ventajas más notables del almacenamiento SAN es su capacidad para proporcionar un rendimiento excepcional. ',
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
                    <NetworkCheckIcon />
                  </svg>
                ),
                title: 'Baja latencia',
                subtitle:
                  'El almacenamiento SAN ofrece baja latencia, lo que significa que los datos pueden accederse y escribirse rápidamente.',
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
                    <SettingsBackupRestoreIcon />
                  </svg>
                ),
                title: 'Respaldo y recuperación de datos',
                subtitle:
                  'Los sistemas SAN suelen incluir capacidades avanzadas de respaldo y recuperación de datos. ',
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
                title: 'Migración de datos',
                subtitle:
                  'El almacenamiento SAN permite la migración de datos sin interrupciones. Puedes mover datos entre dispositivos de almacenamiento o realizar actualizaciones de hardware sin afectar a las aplicaciones en funcionamiento.',
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
                    <TerminalIcon />
                  </svg>
                ),
                title: 'Compatibilidad con múltiples plataformas',
                subtitle:
                  ' Los sistemas SAN son compatibles con una amplia variedad de plataformas y sistemas operativos, lo que los hace versátiles y adecuados para entornos heterogéneos.',
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

export default Services3;
