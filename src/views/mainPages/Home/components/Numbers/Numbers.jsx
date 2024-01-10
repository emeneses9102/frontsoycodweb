import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Numbers = () => {

  return (
    <Box>
      <Box marginBottom={{ xs: 4, sm: 6, md: 8 }}>
        <Grid container spacing={2}>
          {[
            {
              title: '+28',
              subtitle: 'Años en el negocio.',
            },
            {
              title: "+5200",
              subtitle: 'Proyectos realizados.',
            },
            {
              title: '90%',
              subtitle: 'De satisfacción con los clientes.',
            },
          ].map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
            <Typography
              variant="h3"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 'medium',
              }}
            >
              {item.title}
            </Typography>
            <Typography color="text.secondary" align={'center'} component="p">
              {item.subtitle}
            </Typography>
          </Grid>
          ))}
        </Grid>
        </Box>
    </Box>
  );
};

export default Numbers;
