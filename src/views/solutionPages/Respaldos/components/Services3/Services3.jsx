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
import alam from '../../../../../svg/illustrations/respaldos-diferenciales.jpg';
import Card from '@mui/material/Card';
import NetworkPingIcon from '@mui/icons-material/NetworkPing';
import RestoreIcon from '@mui/icons-material/Restore';
import AssistantIcon from '@mui/icons-material/Assistant';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SpokeIcon from '@mui/icons-material/Spoke';

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
                ¿Cuáles son las ventajas de implementar
              </Typography>{' '}
              respaldos diferenciales?
            </Box>
            <Typography component={'p'}>
              Los respaldos diferenciales tienen sus propias ventajas y se
              utilizan en diferentes situaciones para satisfacer necesidades
              específicas de respaldo y recuperación de datos. Aquí están
              algunas de las ventajas clave de los respaldos diferenciales:
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
                    <NetworkPingIcon />
                  </svg>
                ),
                title: 'Menor consumo de espacio de almacenamiento',
                subtitle:
                  ' Al igual que los respaldos incrementales, los respaldos diferenciales solo copian y almacenan los datos que han cambiado desde la última copia de seguridad completa. ',
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
                    <RestoreIcon />
                  </svg>
                ),
                title: 'Proceso de respaldo más rápido',
                subtitle:
                  'Debido a que solo se respaldan los datos que han cambiado desde la última copia completa, los respaldos diferenciales tienden a ser más rápidos que los respaldos completos.',
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
                    <AssistantIcon />
                  </svg>
                ),
                title: 'Restauración más sencilla ',
                subtitle:
                  'A diferencia de los respaldos incrementales que requieren combinar múltiples copias de seguridad, en los respaldos diferenciales, solo necesita la última copia completa y la última copia diferencial para restaurar los datos.',
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
                    <MonitorHeartIcon />
                  </svg>
                ),
                title: 'Mayor frecuencia de respaldo posible',
                subtitle:
                  'Dado que los respaldos diferenciales se ejecutan más rápidamente que los respaldos completos, es más factible realizarlos con mayor frecuencia, lo que proporciona copias de seguridad más actualizadas.',
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
                    <SpokeIcon />
                  </svg>
                ),
                title: 'Reducción de la cantidad de datos duplicados',
                subtitle:
                  'Al respaldar solo los cambios desde la última copia, los respaldos diferenciales reducen la duplicación de datos, lo que puede ser beneficioso en entornos con datos repetitivos o altamente redundantes.',
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
