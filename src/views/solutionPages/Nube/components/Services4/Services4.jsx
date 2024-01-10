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
import cableado from '../../../../../svg/illustrations/nube-privada.jpg';
import Card from '@mui/material/Card';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import VpnLockIcon from '@mui/icons-material/VpnLock';

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
                ¿Cuáles son las ventajas de utilizar
              </Typography>{' '}
              nube privada?
            </Typography>
            <Typography marginTop={1}>
              Utilizar una nube privada ofrece varias ventajas, especialmente
              para organizaciones que requieren un mayor control y seguridad
              sobre sus recursos informáticos. Aquí están algunas de las
              ventajas de utilizar una nube privada:
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
                    <ControlCameraIcon />
                  </svg>
                ),
                title: 'Control total',
                subtitle:
                  'En una nube privada, la organización tiene un control completo sobre la infraestructura y los recursos informáticos. Esto permite una mayor personalización y adaptación a las necesidades específicas de la empresa.',
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
                title: 'Seguridad y privacidad',
                subtitle:
                  'Al tener control sobre la infraestructura, una nube privada ofrece un mayor grado de seguridad y privacidad. Las organizaciones pueden implementar medidas de seguridad específicas y personalizadas para proteger sus datos y aplicaciones.',
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
                title: 'Cumplimiento normativo',
                subtitle:
                  'Para organizaciones que deben cumplir con regulaciones específicas de la industria o normativas de seguridad, una nube privada ofrece más flexibilidad para adaptarse a estos requisitos y demostrar el cumplimiento.',
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
                    <MultilineChartIcon />
                  </svg>
                ),
                title: 'Rendimiento predecible',
                subtitle:
                  'Con una nube privada, las organizaciones pueden dedicar recursos informáticos exclusivamente a sus aplicaciones y cargas de trabajo, lo que proporciona un rendimiento más predecible y constante.',
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
                    <VpnLockIcon />
                  </svg>
                ),
                title: 'Aislamiento de recursos',
                subtitle:
                  'Los recursos informáticos en una nube privada están dedicados exclusivamente a una organización, lo que reduce el riesgo de que otros usuarios compartan recursos y afecten el rendimiento.',
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
