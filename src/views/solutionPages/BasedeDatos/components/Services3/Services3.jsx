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
import alam from '../../../../../svg/illustrations/bases-de-datos-relacionales.jpg';
import Card from '@mui/material/Card';
import SdCardIcon from '@mui/icons-material/SdCard';
import TableRowsIcon from '@mui/icons-material/TableRows';
import InsightsIcon from '@mui/icons-material/Insights';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TerminalIcon from '@mui/icons-material/Terminal';

const Services3 = () => {
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
                ¿Cuáles son las ventajas de implementar base de datos
              </Typography>{' '}
              relacionales?
            </Box>
            <Typography component={'p'}>
              Si bien las bases de datos relacionales ofrecen muchas ventajas,
              es importante destacar que no son la mejor opción para todos los
              casos. En situaciones donde la estructura de datos es altamente
              variable o se manejan grandes volúmenes de datos no estructurados,
              las bases de datos NoSQL u otros enfoques pueden ser más
              adecuados. La elección de la tecnología de base de datos debe
              basarse en los requisitos específicos de cada proyecto.
              <br />
              La implementación de bases de datos relacionales ofrece varias
              ventajas, lo que explica su continua popularidad en una amplia
              variedad de aplicaciones empresariales y sistemas de información.
              Aquí hay algunas de las ventajas clave de utilizar bases de datos
              relacionales:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <List disablePadding>
            {[
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <SdCardIcon />
                  </svg>
                ),
                title: 'Integridad de datos',
                subtitle:
                  'Utiliza restricciones de integridad, como claves primarias y foráneas, que garantizan que los datos sean precisos y coherentes. Esto ayuda a mantener la calidad de los datos y a prevenir errores.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <TableRowsIcon />
                  </svg>
                ),
                title: 'Estructura tabular ',
                subtitle:
                  'Almacenanamiento en tablas con filas y columnas, lo que proporciona una estructura de datos organizada y fácil de entender. Esto facilita la consulta y el análisis de datos.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <TerminalIcon />
                  </svg>
                ),
                title: 'Consultas SQL',
                subtitle:
                  'Los sistemas de gestión de bases de datos relacionales (SGBDR) permiten utilizar SQL (Structured Query Language), un lenguaje de consulta poderoso y ampliamente utilizado para realizar consultas complejas y filtrar datos de manera eficiente.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <InsightsIcon />
                  </svg>
                ),
                title: 'Transacciones ACID',
                subtitle:
                  '(Atomicidad, Consistencia, Aislamiento y Durabilidad), lo que garantiza que las transacciones sean seguras y fiables, incluso en situaciones de fallo.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <AdminPanelSettingsIcon />
                  </svg>
                ),
                title: 'Confiabilidad',
                subtitle:
                  'Uso en aplicaciones críticas durante décadas y tienen un historial probado de confiabilidad y estabilidad.',
              },
            ].map((item, index) => (
              <ListItem key={index} disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    variant={'rounded'}
                    color={theme.palette.primary.dark}
                    bgcolor={`${theme.palette.primary.light}22`}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box maxWidth={600} width={'100%'}>
            {loading ? (
              <SkeletonC heightFrom={100} />
            ) : (
              <Box
                component={Card}
                boxShadow={2}
                height={'100%'}
                width={'100%'}
              >
                <LazyLoadinComponent
                  width={'100%'}
                  height={'100%'}
                  src={alam}
                  title={'...'}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services3;
