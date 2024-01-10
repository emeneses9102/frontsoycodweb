import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import RouteIcon from '@mui/icons-material/Route';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import HubIcon from '@mui/icons-material/Hub';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Services1 = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Box marginBottom={4} marginTop={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h4'}
          gutterBottom
        >
          <Typography color="primary" variant="inherit" component="span">
            ¿Qué es el almacenamiento NAS
          </Typography>{' '}
          (Network-Attached Storage)?
          <Typography component={'p'} marginTop={2}>
            NAS (Almacenamiento Conectado a la Red) en español, es una solución
            de almacenamiento que se utiliza para compartir y gestionar archivos
            y datos a través de una red de área local (LAN) o una red más
            amplia, como Internet. A diferencia del almacenamiento SAN (Storage
            Area Network), que se enfoca en el almacenamiento de bloques, NAS se
            centra en el almacenamiento de archivos y se presenta como un
            sistema de archivos compartido a través de la red. Aquí están
            algunas características clave del almacenamiento NAS:
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Arquitectura dedicada',
            subtitle:
              ' Una SAN es una red de almacenamiento independiente y dedicada que utiliza conexiones de alta velocidad, como Fibre Channel o iSCSI, para conectar servidores y dispositivos de almacenamiento. ',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <RouteIcon />
              </svg>
            ),
            color: colors.amber,
          },
          {
            title: 'Bloques de datos',
            subtitle:
              'En una SAN, los datos se almacenan y se acceden en forma de bloques, no de archivos.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <ViewModuleIcon />
              </svg>
            ),
            color: colors.blueGrey,
          },
          {
            title: 'Alta disponibilidad',
            subtitle:
              'Las SAN están diseñadas para proporcionar alta disponibilidad y tolerancia a fallos. ',
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
            color: colors.blue,
          },
          {
            title: 'Escalabilidad',
            subtitle:
              ' Las SAN son altamente escalables y pueden crecer para satisfacer las necesidades cambiantes de almacenamiento al agregar más dispositivos de almacenamiento o servidores.',
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
            color: colors.green,
          },
          {
            title: 'Gestión centralizada',
            subtitle:
              'La gestión de una SAN se realiza de forma centralizada, lo que facilita la administración y la asignación de recursos de almacenamiento.',
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
            color: colors.pink,
          },
          {
            title: 'Seguridad',
            subtitle:
              'Las SAN suelen contar con medidas de seguridad avanzadas para proteger los datos almacenados y las comunicaciones, como la autenticación y el cifrado.',
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
            color: colors.deepPurple,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box width={1} height={'100%'} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={item.color[themeMode === 'light' ? 50 : 100]}
                  color={item.color[themeMode === 'light' ? 500 : 700]}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Services1.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services1;
