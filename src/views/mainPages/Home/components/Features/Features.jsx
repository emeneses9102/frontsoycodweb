/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TeamWorkingIllustration from '../../../../../svg/illustrations/TeamWorking';
import presentacionCopr from '../../../../../svg/files/Presentación Corporativa Sycod 2023.pdf';

const Features = () => {
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
          color={'textSecondary'}
          align={'center'}
        >
        
        </Typography>
        <Typography
          component={'h2'}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
         Diseñamos y aplicamos soluciones tecnológicas 
          <br />
          a los problemas cotidianos de las empresas
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          A lo largo de nuestra trayectoria hemos trabajado cuentas del sector industrial, retail, financiero, hospitalario, e-commece. 
          <br />
          Por lo que nos converitimos en un aliado tecnológico multiárea que ofrece no solo soluciones sino casos de éxito.
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
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={4}
      >
        <Box height={'100%'} width={'100%'} maxWidth={600}>
          <TeamWorkingIllustration height={'100%'} width={'100%'} />
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
