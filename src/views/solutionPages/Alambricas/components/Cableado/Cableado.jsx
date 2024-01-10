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
import cableado from '../../../../../svg/illustrations/cableado-structurado.jpg';
import Card from '@mui/material/Card';
import LanIcon from '@mui/icons-material/Lan';
import SavingsIcon from '@mui/icons-material/Savings';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

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
              de utilizar cableado estructurado?
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
                    <LanIcon />
                  </svg>
                ),
                title: 'Conectividad',
                subtitle:
                  'Un sistema de cableado estructurado brinda la posibilidad de que el personal tenga movilidad de un lugar a otro, o agregar servicios a ser transportados por la red sin la necesidad de incurrir en altos costos de recableado.',
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
                title: 'Ahorro de costos',
                subtitle:
                  'Facilita y agiliza las labores de mantenimiento de los servicios, reduciendo costos significativamente.',
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
                    <WorkspacePremiumIcon />
                  </svg>
                ),
                title: 'Resiliencia',
                subtitle:
                  'Implementar el cableado estructurado bajo estándares puede garantizar al cliente algunas de sus certificaciones para las aplicaciones futuras que presenten alto nivel de exigencia en sus requisitos.',
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
                    <HealthAndSafetyIcon />
                  </svg>
                ),
                title: 'Automatización inteligente',
                subtitle:
                  'El cableado estructurado tiene un plazo de amortización muy amplio y una larga vida útil.',
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
                    <AlarmOnIcon />
                  </svg>
                ),
                title: 'Fiabilidad',
                subtitle:
                  'Contar con un correcto sistema de cableado estructurado reduce costos por mantenimiento, traslado, ampliación, además de contar con una durabilidad de 10 años o más.',
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
