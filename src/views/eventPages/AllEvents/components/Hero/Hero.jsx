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
          variant="h2"
          align={'center'}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
          sx={{
            fontWeight: 900,
          }}
        >
          ¡Gracias por ser parte
          <br />
           de nuestros increíbles eventos!
        </Typography>
      </Box>
      <Box marginBottom={{ xs: 6, sm: 8, md: 12 }}>
        <Box
          component={Typography}
          variant="h6"
          align={'center'}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
         Fue maravilloso ver cómo cada uno de ustedes disfrutó de las actividades, 
          <br />
          participó en las charlas, y compartió momentos significativos. 
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
