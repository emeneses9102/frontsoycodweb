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
import cableado from '../../../../../svg/illustrations/base-de-datos-no-relacionales.jpg';
import Card from '@mui/material/Card';
import LanIcon from '@mui/icons-material/Lan';
import SavingsIcon from '@mui/icons-material/Savings';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const Services4 = () => {
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
                ¿Cuáles son las ventajas de implementar base de datos
              </Typography>{' '}
              no relacionales?
            </Typography>
            <Typography component={'p'}>
              Es importante destacar que las bases de datos NoSQL no son una
              solución universal y que su elección debe basarse en los
              requisitos específicos de tu aplicación. En muchos casos, las
              aplicaciones modernas utilizan una combinación de bases de datos
              relacionales y NoSQL para satisfacer diferentes necesidades de
              almacenamiento y consulta de datos.
              <br />
              La implementación de bases de datos no relacionales, también
              conocidas como bases de datos NoSQL (Not Only SQL), ofrece una
              serie de ventajas en comparación con las bases de datos
              relacionales. Estas ventajas hacen que las bases de datos NoSQL
              sean ideales para ciertas aplicaciones y escenarios específicos.
              Aquí tienes algunas de las principales ventajas de implementar
              bases de datos no relacionales:
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
                title: 'Caché y Memoria',
                subtitle:
                  'Algunas bases de datos NoSQL, como Redis y Memcached, están diseñadas específicamente para almacenar datos en memoria, lo que las hace extremadamente rápidas para ciertas aplicaciones.',
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
                title: 'Grandes cargas de trabajo',
                subtitle:
                  'Son especialmente útiles para aplicaciones con grandes cantidades de datos o alta concurrencia, como sistemas de análisis de big data y aplicaciones de IoT (Internet de las cosas).',
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
                title: 'Alto rendimiento',
                subtitle:
                  'Eficientes para lecturas y escrituras rápidas, especialmente en aplicaciones de alto tráfico y velocidad, como redes sociales y aplicaciones en tiempo real.',
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
                title: 'Modelos de datos variados',
                subtitle:
                  'Existen varios tipos de bases de datos NoSQL, incluyendo bases de datos de documentos, columnas, grafos y clave-valor. Esto permite elegir el modelo que mejor se adapte a los datos y necesidades de la aplicación.',
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
                title: 'Tolerancia a fallos',
                subtitle:
                  'Muchas bases de datos NoSQL están diseñadas para operar en entornos distribuidos y ofrecen mecanismos de tolerancia a fallos que garantizan la disponibilidad y la recuperación en caso de errores.',
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

export default Services4;
