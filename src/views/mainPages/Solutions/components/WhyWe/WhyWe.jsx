import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const whyWe = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        ></Typography>
        <Typography
          component={'h2'}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Nuestro proceso de trabajo es sencillo y eficaz
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          <br />
          Estas cinco fases proporcionan una estructura general para el
          desarrollo de proyectos y permiten un enfoque organizado y sistemático
          para alcanzar los objetivos establecidos.
        </Typography>
      </Box>
      <Grid container marginBottom={10} spacing={4}>
        {[
          {
            title: 'Planificación',
            subtitle:
              'Se definen los objetivos, el alcance y los requisitos del proyecto. Implica identificar el propósito del proyecto, fijar metas y determinar los resultados concretos. El plan incluye un calendario, presupuesto, asignación de recursos y evaluación de riesgos.',
          },
          {
            title: 'Diseño',
            subtitle:
              'Se profundiza en el marco conceptual del proyecto. Esto implica traducir los requisitos y objetivos identificados en la fase de planificación en un diseño detallado.',
          },
          {
            title: 'Aplicación',
            subtitle:
              'Esta fase ejecuta las tareas descritas en el plan del proyecto, la asignación eficaz de los recursos y la gestión de los plazos. Incluyendo actividades como construir, codificar, probar e integrar componentes.',
          },
          {
            title: 'Evaluación y Cierre',
            subtitle:
              'Evaluar el proyecto con base a los objetivos y criterios de éxito predefinidos. Cierre del proyecto documentando, realizando revisiones posteriores al proyecto y transfiriendo cualquier tarea de mantenimiento o apoyo a los equipos adecuados.',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'} alignItems={'center'} marginBottom={1}>
                <Box
                  borderRadius={'100%'}
                  bgcolor={theme.palette.secondary.main}
                  marginRight={2}
                  width={40}
                  height={40}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Box
                    component={Typography}
                    variant={'h6'}
                    fontWeight={600}
                    color={theme.palette.common.white}
                  >
                    {i + 1}
                  </Box>
                </Box>
                <Typography variant={'h6'} gutterBottom fontWeight={500}>
                  {item.title}
                </Typography>
              </Box>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display={'flex'} justifyContent={'center'}>
        <Box
          display={'flex'}
          flexDirection={{
            xs: 'column',
            sm: 'row',
          }}
          alignItems={'center'}
        >
          <Typography
            sx={{
              fontWeight: 'medium',
            }}
            component={'h3'}
            variant={'h4'}
          >
            ¿Tiene algún proyecto que desee comenzar?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
            sx={{
              marginLeft: { xs: 0, sm: 2 },
              marginTop: { xs: 2, sm: 0 },
            }}
          >
            Contáctanos
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default whyWe;
