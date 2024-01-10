import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SkeletonC from '../../../../../svg/components/SkeletonC';
import LazyLoadinComponent from '../../../../../svg/components/LazyLoadingComponent';
import alam from '../../../../../svg/illustrations/business-man-3157759_1280.jpg';
import Card from '@mui/material/Card';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StarsIcon from '@mui/icons-material/Stars';
import RestoreIcon from '@mui/icons-material/Restore';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';


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
                    <FactCheckIcon />
                  </svg>
                ),
                title: 'Planificación para la capacidad',
                subtitle:
                  'Permite prever y planificar para futuras expansiones o cambios en la demanda de la red, asegurándose de que la infraestructura pueda crecer de manera eficiente.',
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
                    <StarsIcon />
                  </svg>
                ),
                title: 'Mejora de la experiencia del usuario',
                subtitle:
                  'Garantiza que los usuarios experimenten una conexión WiFi estable y de alta calidad, lo que mejora la satisfacción del cliente y la productividad de los empleados.',
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
                title: 'Ahorro de tiempo y dinero a largo plazo',
                subtitle:
                  'Aunque llevar a cabo un site survey puede llevar tiempo y recursos iniciales, puede ahorrar mucho tiempo y dinero a largo plazo al evitar problemas de conectividad, reparaciones costosas y reconfiguraciones.',
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
                title: 'Cumplimiento de normativas',
                subtitle:
                  'En algunos casos, un site survey puede ser necesario para cumplir con regulaciones o estándares específicos, como en entornos de atención médica o empresas que manejan datos confidenciales.',
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
                title: 'Diagnóstico de problemas',
                subtitle:
                  'También se puede utilizar un site survey como herramienta de diagnóstico para identificar problemas existentes en una red WiFi ya implementada y tomar medidas correctivas.',
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
