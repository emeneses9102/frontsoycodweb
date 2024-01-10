import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={{
        xs: 0,
        md: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        paddingX={{ xs: 0, md: 3 }}
        paddingTop={3}
        paddingBottom={{ xs: 0, md: 3 }}
      >
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
         ¿Cómo contactarnos?
        </Typography>
        <Typography
          variant={'body2'}
          color={'textSecondary'}
          sx={{
            marginBottom: 2,
          }}
        >
         Si tiene alguna pregunta o duda sobre la política de privacidad, póngase en póngase en contacto con nosotros.
        </Typography>
        <Typography variant={'subtitle2'}>
        contacto@sycod.com
          <br />
          55 5661 1516
          <br />
          Avenida Insurgentes Sur Número 1605, Piso 11, Colonia San José de Insurgentes
          <br />
          C.P. 03900, en México, Ciudad de México
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
