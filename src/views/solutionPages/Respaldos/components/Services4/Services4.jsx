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
import cableado from '../../../../../svg/illustrations/resplados-incrementales.jpg';
import Card from '@mui/material/Card';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import UpdateIcon from '@mui/icons-material/Update';
import CompressIcon from '@mui/icons-material/Compress';
import AvTimerIcon from '@mui/icons-material/AvTimer';

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
                ¿Cuáles son las ventajas de implementar
              </Typography>{' '}
              respaldos incrementales?
            </Typography>
            <Typography marginTop={1}>
              Los respaldos incrementales tienen sus propias ventajas y se
              utilizan en diferentes escenarios para satisfacer necesidades
              específicas de respaldo y recuperación de datos. Aquí están
              algunas de las ventajas clave de los respaldos incrementales:
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
                    <SpaceDashboardIcon />
                  </svg>
                ),
                title: 'Menor uso de espacio de almacenamiento',
                subtitle:
                  'Los respaldos incrementales solo copian y almacenan los datos que han cambiado desde el último respaldo, en lugar de duplicar todo el conjunto de datos. Esto resulta en un uso más eficiente del espacio de almacenamiento.',
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
                    <UpdateIcon />
                  </svg>
                ),
                title: 'Procesos de respaldo más rápidos',
                subtitle:
                  'Dado que solo se respaldan los datos nuevos o modificados desde la última copia de seguridad, los respaldos incrementales suelen ser más rápidos de realizar en comparación con los respaldos completos.',
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
                    <CompressIcon />
                  </svg>
                ),
                title: 'Menos ancho de banda requerido',
                subtitle:
                  'Si se están realizando respaldos a través de una red, los respaldos incrementales requieren menos ancho de banda en comparación con los respaldos completos, lo que puede ser beneficioso en redes con limitaciones de capacidad.',
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
                    <AvTimerIcon />
                  </svg>
                ),
                title: 'Ahorro de tiempo en la restauración',
                subtitle:
                  'Aunque la restauración de un respaldo incremental puede requerir la combinación de múltiples copias incrementales y la última copia completa.',
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
