import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';


const Highlights = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Visión del negocio',
            subtitle:
              'Entender la estrategia del negocio del cliente y detección de necesidades a corto, meadiano y largo plazo.',
            icon: (
              <svg
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <AutoGraphIcon/>
              </svg>
            ),
          },
          {
            title: 'Analisis y Diseño',
            subtitle:
              'Presentación de iniciativas, mejores prácticas, recomendaciones y propuestas de alto valor.',
            icon: (
              <svg
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <FactCheckOutlinedIcon />
              </svg>
            ),
          },
          {
            title: 'Evaluación y selección',
            subtitle:
              'Análisis de los requerimientos presupuestales, técnicos y diseño de propuesta.',
            icon: (
              <svg
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <VerifiedOutlinedIcon/>
              </svg>
            ),
          },{
            title: 'Presentación del proyecto',
            subtitle:
              'Propuesta con plan de trabajo detallado y con diferentes opciones.',
            icon: (
              <svg
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <CoPresentOutlinedIcon/>
              </svg>
            ),
          },
          {
            title: 'Implementación',
            subtitle:
              'Validación de la propuesta Técnica y Financiera con el cliente. Costeo y/o justificación financiera del proyecto.',
            icon: (
              <svg
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <Diversity2OutlinedIcon/>
              </svg>
            ),
          },
          {
            title: 'Mejora continua',
            subtitle:
              'Evaluación del proyecto, aplicación de las más recientes técnologias y versiones.',
            icon: (
              <svg
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <TipsAndUpdatesOutlinedIcon/>
              </svg>
            ),
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
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
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

export default Highlights;
