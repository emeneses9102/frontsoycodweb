import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          component="h1"
          variant="h2"
          align={'center'}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
          sx={{
            fontWeight: 900,
          }}
        >
          ¡Descubre consejos, ideas
          <br />y recursos exclusivos en nuestro blog!
        </Typography>
      </Box>
      <Box marginBottom={{ xs: 6, sm: 8, md: 12 }}>
        <Box
          component={Typography}
          variant="h6"
          align={'center'}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          ¿Quieres mantenerte al día con las últimas tendencias de nuestra
          industria?
          <br />
          Visita nuestro blog, donde compartimos insights, guías y noticias
          relevantes que te ayudarán a estar informado y tomar decisiones
          acertadas.
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
