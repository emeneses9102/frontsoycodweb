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
import cableado from '../../../../../svg/illustrations/redes-industriales.jpg';
import Card from '@mui/material/Card';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import DnsIcon from '@mui/icons-material/Dns';
import ArchitectureIcon from '@mui/icons-material/Architecture';

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
                Existes desafíos complicados
              </Typography>{' '}
              pero no imposibles de resolver
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
                    <WorkspacePremiumIcon />
                  </svg>
                ),
                title: 'Clasificación IP66',
                subtitle:
                  'Plataformas informáticas altamente interoperables, con clasificación IP66 y legibles a la luz del sol para manejar de manera efectiva los sistemas de control.',
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
                title: 'Monitoreo en tiempo real',
                subtitle:
                  'Soluciones de red confiables y seguras para permitir el monitoreo en tiempo real de sitios de campo desde la cabina de un perforador, monitorear tuberías, pozos de gas, etc...',
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
                    <DnsIcon />
                  </svg>
                ),
                title: 'Routers industriales',
                subtitle:
                  'Routers industriales para una amplia variedad de protocolos industriales para integrar sin problemas unidades remotas en sistemas SCADA y/o MES.',
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
                    <ArchitectureIcon/>
                  </svg>
                ),
                title: 'Diseño de redes',
                subtitle:
                  'Creación de diseños profesionales para redes inalámbricas que permitan un roaming saludable para brindar buena conectividad y de esta manera garantizar la operación.',
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
