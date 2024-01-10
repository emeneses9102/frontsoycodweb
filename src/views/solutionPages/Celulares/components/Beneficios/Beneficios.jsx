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
import benefits from '../../../../../svg/illustrations/beneficios-redes-celulares2.jpg';
import Card from '@mui/material/Card';
import SavingsIcon from '@mui/icons-material/Savings';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import CellTowerIcon from '@mui/icons-material/CellTower';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

const Beneficios = () => {
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
        marginTop={1}
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
              de implementar redes celulares?
            </Box>
            <Typography component={'p'}>
            La Tecnología sobre redes celulares tiene beneficios claros ya que: aumenta la agilidad empresarial, disminuye el tiempo de inactividad y reduce los gastos operativos de la red, sin sacrificar el rendimiento o la confiabilidad ni aumentar los costos de la red.
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
                     <SavingsIcon />
                  </svg>
                ),
                title: 'Disponibilidad',
                subtitle:
                  'Aumenta la disponibilidad de la Red a un bajo costo.',
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
                    <LandscapeIcon />
                  </svg>
                ),
                title: 'Alcance',
                subtitle:
                  'Conexión en sitios de difícil acceso',
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
                    <ShutterSpeedIcon />
                  </svg>
                ),
                title: 'Velocidad',
                subtitle:
                  'Conexión rápida de una nueva sucursal.',
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
                    <CellTowerIcon />
                  </svg>
                ),
                title: 'Alta conectividad',
                subtitle:
                  'Equipos con capacidad de transportación que pueden brindar conectividad en cualquier parte donde haya cobertura celular.',
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
                    <ThunderstormIcon />
                  </svg>
                ),
                title: 'Durabilidad y resistencia',
                subtitle:
                  'Alta durabilidad y equipos preparados para ambientes extremos.',
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
                    <LocalPoliceIcon />
                  </svg>
                ),
                title: 'Ciberseguridad',
                subtitle:
                  'Equipos que permiten una conexión segura y confiable.',
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
                  src={benefits}
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

export default Beneficios;
