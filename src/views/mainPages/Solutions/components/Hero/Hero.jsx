import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import presentacionCopr from '../../../../../svg/files/Presentacion_Corporativa_Sycod_2023.pdf';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        ></Typography>
        <Typography
          component={'h1'}
          fontWeight={700}
          variant={'h2'}
          gutterBottom
          align={'center'}
        >
          Servicios, soporte y soluciones
          <br />
          tecnológicas de alto impacto para su empresa
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Como expertos en diversas soluciones, le ayudamos en todo el proceso.
          Desde la idea, planeación, diseño, desarrollo, implementación y
          ampliación del proyecto.
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Button
            component={'a'}
            href={presentacionCopr}
            target={'_blank'}
            rel="noopener noreferrer"
            download="Presentación Corporativa Sycod 2023"
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
          >
            Presentación Corporativa
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
