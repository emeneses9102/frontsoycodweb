import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
          respaldos que trabajamos?
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
            title: 'Respaldos completos',
            subtitle:
              'Este tipo de respaldo copia la totalidad de los datos, que puede consistir en cintas o discos',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <AddTaskIcon />
              </svg>
            ),
            color: colors.amber,
          },
          {
            title: 'Respaldos incrementales',
            subtitle:
              'Una operación de respaldo incremental sólo copia los datos que han variado desde la última operación de Respaldo de cualquier tipo.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <ArrowOutwardIcon />
              </svg>
            ),
            color: colors.purple,
          },
          {
            title: 'Respaldos diferenciales',
            subtitle:
              'Una operación de respaldo diferencial es similar a un respaldo incremental la primera vez que se lleva a cabo',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <CloudUploadIcon />
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
