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
import cableado from '../../../../../svg/illustrations/statistic-1606951_1280.png';
import Card from '@mui/material/Card';
import CellTowerIcon from '@mui/icons-material/CellTower';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

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
              de utilizar Site Survey?
            </Typography>
            <Typography component={'p'}>
              Un site survey es una inversión valiosa para garantizar que una
              red WiFi funcione de manera eficiente y confiable, proporcionando
              una conexión de alta calidad a los usuarios y evitando problemas
              futuros.
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
                    <CellTowerIcon />
                  </svg>
                ),
                title: 'Optimización de la cobertura',
                subtitle:
                  'Un site survey permite determinar la ubicación óptima de los puntos de acceso (AP) para garantizar una cobertura uniforme y confiable en todo el área objetivo. Esto ayuda a evitar áreas con señales débiles o interferencias.',
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
                    <PermDataSettingIcon />
                  </svg>
                ),
                title: 'Reducción de interferencias',
                subtitle:
                  'Identifica fuentes de interferencia, como otros dispositivos electrónicos, redes WiFi cercanas, o paredes y obstáculos físicos que pueden debilitar la señal. Esto permite tomar medidas para minimizar estas interferencias.',
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
                    <QueryStatsIcon />
                  </svg>
                ),
                title: 'Mejora del rendimiento',
                subtitle:
                  'Un site survey ayuda a maximizar el rendimiento de la red al garantizar que los dispositivos puedan conectarse a la velocidad máxima posible y minimizar los problemas de latencia o desconexión.',
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
                    <AttachMoneyIcon />
                  </svg>
                ),
                title: 'Ahorro de recursos',
                subtitle:
                  'Evita gastos innecesarios en la adquisición de hardware adicional, ya que se puede determinar la cantidad adecuada de puntos de acceso y su ubicación estratégica.',
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
                    <VerifiedUserIcon />
                  </svg>
                ),
                title: 'Seguridad',
                subtitle:
                  'Ayuda a identificar vulnerabilidades de seguridad al asegurarse de que la señal WiFi no se extienda más allá de los límites deseados y que no sea accesible desde áreas no autorizadas.',
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
