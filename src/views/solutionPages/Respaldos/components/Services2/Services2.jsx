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
import alam from '../../../../../svg/illustrations/full-backup.jpg';
import Card from '@mui/material/Card';
import SpeedIcon from '@mui/icons-material/Speed';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BugReportIcon from '@mui/icons-material/BugReport';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

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
              respaldos completos?
            </Box>
            <Typography component={'p'}>
              Este tipo de respaldo copia la totalidad de los datos, que puede
              consistir en cintas o discos. La ventaja principal de la
              realización de un respaldo completo en cada operación es que se
              dispone de la totalidad de los datos en un único conjunto. Esto
              permite restaurar los datos en un tiempo mínimo, lo cual se mide
              en términos de objetivo de tiempo de recuperación (RTO). No
              obstante, el inconveniente es que lleva más tiempo realizar un
              respaldo completo que de otros tipos, y requiere más espacio de
              almacenamiento.
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
                title: 'Restauración rápida y sencilla',
                subtitle:
                  'Con un respaldo completo, toda la información se guarda en una sola copia, lo que facilita y acelera el proceso de restauración en caso de pérdida de datos. No es necesario combinar múltiples copias de seguridad para recuperar datos completos.',
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
                    <SupervisedUserCircleIcon />
                  </svg>
                ),
                title: 'Menor complejidad de administración',
                subtitle:
                  'La gestión de respaldos completos suele ser más sencilla porque no es necesario realizar un seguimiento de múltiples copias de seguridad incrementales o diferenciales.',
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
                    <BugReportIcon />
                  </svg>
                ),
                title: 'Tolerancia a fallos',
                subtitle:
                  'Dado que cada respaldo completo contiene todos los datos, cada copia es una imagen completa y autónoma de los datos en ese momento.',
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
                    <SavedSearchIcon />
                  </svg>
                ),
                title: 'Recuperación de datos precisos',
                subtitle:
                  'Al utilizar respaldos completos, puede estar seguro de que cada copia de seguridad contiene una instantánea completa y precisa de sus datos en un momento específico.',
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
