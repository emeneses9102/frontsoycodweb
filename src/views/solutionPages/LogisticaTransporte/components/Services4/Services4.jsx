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
import cableado from '../../../../../svg/illustrations/almacenamiento-nas.jpg';
import Card from '@mui/material/Card';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

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
                ¿Cuáles son las ventajas de utilizar el
              </Typography>{' '}
              almacenamiento NAS?
            </Typography>
            <Typography marginTop={1}>
              El almacenamiento NAS ofrece varias ventajas que lo hacen una
              opción atractiva para una amplia gama de usuarios y
              organizaciones. Aquí están algunas de las ventajas clave del
              almacenamiento NAS:
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
                    <EngineeringIcon />
                  </svg>
                ),
                title: 'Fácil de configurar y usar',
                subtitle:
                  'El almacenamiento NAS es relativamente fácil de configurar y utilizar. Por lo general, se presenta como un dispositivo independiente con su propia interfaz de administración web intuitiva.',
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
                    <FolderSpecialIcon />
                  </svg>
                ),
                title: 'Acceso compartido a archivos',
                subtitle:
                  'NAS permite compartir archivos y datos de manera eficiente en una red local o incluso a través de Internet. ',
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
                    <RemoveFromQueueIcon />
                  </svg>
                ),
                title: 'Acceso remoto',
                subtitle:
                  'Muchos dispositivos NAS permiten el acceso remoto a los datos almacenados a través de Internet. Esto permite a los usuarios acceder a sus archivos desde cualquier lugar con una conexión a la web.',
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
                    <MonetizationOnIcon />
                  </svg>
                ),
                title: 'Costo-efectividad',
                subtitle:
                  'El almacenamiento NAS tiende a ser una solución más asequible en comparación con otras opciones de almacenamiento, como SAN. ',
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
                    <EnergySavingsLeafIcon />
                  </svg>
                ),
                title: 'Consumo de energía eficiente',
                subtitle:
                  'Los dispositivos NAS suelen consumir menos energía en comparación con los servidores tradicionales, lo que puede ayudar a reducir los costos de funcionamiento a lo largo del tiempo.',
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
