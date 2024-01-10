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
import alam from '../../../../../svg/illustrations/nube-hibrida.jpg';
import Card from '@mui/material/Card';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import SavingsIcon from '@mui/icons-material/Savings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

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
                ¿Cuáles son las ventajas de tener una
              </Typography>{' '}
              nube híbrida?
            </Box>
            <Typography component={'p'}>
              El uso de una nube híbrida, que combina recursos de nube pública y
              privada, ofrece una serie de ventajas que pueden ser beneficiosas
              para muchas organizaciones. Aquí están algunas de las ventajas más
              destacadas de utilizar una nube híbrida:
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
                    <SwitchAccessShortcutIcon />
                  </svg>
                ),
                title: 'Flexibilidad',
                subtitle:
                  'Una nube híbrida permite a las organizaciones aprovechar lo mejor de ambos mundos: la escalabilidad y la agilidad de la nube pública y el control y la seguridad de la nube privada.',
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
                title: 'Optimización de costos',
                subtitle:
                  'Las organizaciones pueden optimizar costos al utilizar la nube pública para cargas de trabajo con requisitos variables y la nube privada para cargas de trabajo críticas o sensibles.',
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
                    <AdminPanelSettingsIcon />
                  </svg>
                ),
                title: 'Mayor seguridad y cumplimiento',
                subtitle:
                  'Las cargas de trabajo sensibles o que requieren cumplimiento normativo pueden ser alojadas en la nube privada, lo que proporciona un mayor control y seguridad. ',
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
                    <RunningWithErrorsIcon />
                  </svg>
                ),
                title: 'Reducción de riesgos',
                subtitle:
                  'La nube híbrida permite a las organizaciones reducir los riesgos asociados con la dependencia exclusiva de un solo modelo de nube.',
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
                    <AllInclusiveIcon />
                  </svg>
                ),
                title: 'Continuidad del negocio',
                subtitle:
                  ' La capacidad de mover cargas de trabajo entre la nube pública y privada puede mejorar la resiliencia y la continuidad del negocio en caso de interrupciones o desastres.',
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
