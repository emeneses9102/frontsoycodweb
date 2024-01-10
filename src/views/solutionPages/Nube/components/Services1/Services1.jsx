import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

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
            ¿Cuáles son los tipos de
          </Typography>{' '}
          nube que existen?
          <Typography component={'p'} marginTop={2}>
            Las aplicaciones
            de copia de seguridad han ofrecido, durante mucho tiempo, distintos
            tipos de operaciones de respaldo. Los tipos de respaldos más
            corrientes son el respaldo completo, el incremental y el
            diferencial. Existen otros tipos de respaldos, como el respaldo
            completo sintético o la copia en espejo, así como la protección de
            datos continua (CDP).
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Nube pública',
            subtitle:
              'En este modelo, los servicios en la nube son proporcionados por proveedores de servicios en la nube y están disponibles para el público en general.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <CloudQueueIcon />
              </svg>
            ),
            color: colors.amber,
          },
          {
            title: 'Nube privada',
            subtitle:
              ' En una nube privada, los recursos informáticos se utilizan exclusivamente por una organización específica.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <SettingsSystemDaydreamIcon />
              </svg>
            ),
            color: colors.purple,
          },
          {
            title: 'Nube híbrida',
            subtitle:
              ' La nube híbrida combina recursos de nube pública y privada, lo que permite a las organizaciones aprovechar la escalabilidad y la flexibilidad.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <CloudSyncIcon />
              </svg>
            ),
            color: colors.cyan,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
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
