/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={2}>
          <Typography
            component={'h1'}
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.common.white,
            }}
          >
            Estás en buena compañía.
          </Typography>
        </Box>
        <Box>
          <Typography
            component="h2"
            variant="h2"
            color={'primary'}
            sx={{
              fontWeight: 700,
            }}
          >
            Miles de proyectos nos respaldan.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Headline;
