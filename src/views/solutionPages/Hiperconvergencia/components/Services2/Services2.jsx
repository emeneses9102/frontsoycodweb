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
import alam from '../../../../../svg/illustrations/hiperconvergencia_solucion.jpg';
import Card from '@mui/material/Card';
import SchemaIcon from '@mui/icons-material/Schema';
import HubIcon from '@mui/icons-material/Hub';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SavingsIcon from '@mui/icons-material/Savings';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';

const Services2 = () => {
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
                ¿Cuáles son los beneficios de implementar la
              </Typography>{' '}
              hiperconvergencia?
            </Box>
            <Typography component={'p'}>
              La hiperconvergencia ofrece beneficios significativos en términos
              de simplificación, eficiencia, escalabilidad y ahorro de costos.
              Sin embargo, es importante recordar que los beneficios específicos
              pueden variar según las necesidades y el entorno de cada
              organización, por lo que es crucial realizar un análisis detallado
              antes de tomar la decisión de implementar esta tecnología.
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
                    <SchemaIcon />
                  </svg>
                ),
                title: 'Simplificación de la infraestructura',
                subtitle:
                  'Combina servidores, almacenamiento, redes y virtualización en una única plataforma integrada. Reduce la necesidad de gestionar sistemas independientes y simplificando las operaciones.',
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
                title: 'Gestión unificada',
                subtitle:
                  'Proporciona una interfaz de gestión unificada que facilita la administración de recursos. Esto simplifica la configuración, el monitoreo y la resolución de problemas en toda la infraestructura.',
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
                  'Solución altamente escalable. Puedes agregar fácilmente nodos adicionales a medida que crecen las necesidades de recursos, lo que facilita la expansión de tu infraestructura sin interrupciones significativas.',
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
                title: 'Mayor eficiencia',
                subtitle:
                  'Aprovecha la virtualización para compartir recursos de manera más eficiente. Esto reduce el desperdicio de recursos y optimiza el uso de cómputo y almacenamiento.',
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
                title: 'Reducción de costos:',
                subtitle:
                  'Aunque la inversión inicial puede ser significativa, la hiperconvergencia a menudo conduce a una reducción de los costos operativos a largo plazo. La eficiencia energética pueden generar ahorros significativos.',
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
                    <CloudCircleIcon />
                  </svg>
                ),
                title: 'Adopción de la nube híbrida',
                subtitle:
                  'Proporciona una base sólida para la implementación de soluciones de nube híbrida, lo que facilita la migración de cargas de trabajo entre entornos locales y en la nube.',
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

export default Services2;
