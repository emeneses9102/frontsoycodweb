import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SkeletonC from '../../../../../svg/components/SkeletonC';
import LazyLoadinComponent from '../../../../../svg/components/LazyLoadingComponent';
import alam from '../../../../../svg/illustrations/hiperconvergencia_solucion.jpg';
import Card from '@mui/material/Card';
import SchemaIcon from '@mui/icons-material/Schema';
import HubIcon from '@mui/icons-material/Hub';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SavingsIcon from '@mui/icons-material/Savings';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';

const Services2 = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid
        container
        spacing={4}
        marginTop={3}
        direction={isMd ? 'row' : 'row'}
      >
        <Grid item xs={12} md={12} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              <Typography color="primary" variant="inherit" component="span">
                ¿Cuál es la diferencia entre las bases de datos relacionales
              </Typography>{' '}
              y no relacionales?
            </Box>
            <Typography component={'p'}>
              Las bases de datos relacionales son adecuadas cuando se necesita
              una estructura de datos fija y la consistencia es crítica. Las
              bases de datos NoSQL son más adecuadas cuando se necesita
              flexibilidad en el esquema de datos y se espera manejar grandes
              volúmenes de datos no estructurados o semiestructurados. En muchos
              casos, las aplicaciones modernas utilizan una combinación de ambos
              tipos de bases de datos según sus necesidades.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services2;
