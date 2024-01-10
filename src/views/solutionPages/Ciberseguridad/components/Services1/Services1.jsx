import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import PestControlIcon from '@mui/icons-material/PestControl';
import ConnectedTvSharpIcon from '@mui/icons-material/ConnectedTvSharp';
import RecordVoiceOverSharpIcon from '@mui/icons-material/RecordVoiceOverSharp';
import BugReportSharpIcon from '@mui/icons-material/BugReportSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import ReportProblemSharpIcon from '@mui/icons-material/ReportProblemSharp';

const Services1 = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Box marginBottom={4} marginTop={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h4'}
          gutterBottom
        >
          <Typography color="primary" variant="inherit" component="span">
            ¿Cuáles son las amenazas y riesgos
          </Typography>{' '}
          más comúnes que existen?
          <Typography component={'p'} marginTop={2}>
            La ciberseguridad es fundamental en la era digital, ya que protege
            la información crítica y salvaguarda la confianza del público y la
            integridad de las organizaciones. Las estrategias de ciberseguridad
            deben adaptarse y evolucionar constantemente para enfrentar las
            amenazas emergentes en el ciberespacio.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Malware',
            subtitle:
              'Software malicioso, como virus, gusanos, troyanos y ransomware, que puede dañar sistemas, robar información o causar interrupciones.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <PestControlIcon />
              </svg>
            ),
            color: colors.amber,
          },
          {
            title: 'Ataques de hackers',
            subtitle:
              'Intentos de personas o grupos maliciosos para explotar vulnerabilidades y ganar acceso no autorizado a sistemas y datos.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <ConnectedTvSharpIcon />
              </svg>
            ),
            color: colors.purple,
          },
          {
            title: 'Phishing',
            subtitle:
              'Técnicas de ingeniería social que buscan engañar a las personas para que revelen información confidencial, como contraseñas o datos personales.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <RecordVoiceOverSharpIcon />
              </svg>
            ),
            color: colors.cyan,
          },
          {
            title: 'Vulnerabilidades de software',
            subtitle:
              'Debilidades en aplicaciones y sistemas que pueden ser explotadas por atacantes para obtener acceso no autorizado.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <BugReportSharpIcon />
              </svg>
            ),
            color: colors.brown,
          },
          {
            title: 'Fugas de datos',
            subtitle:
              'Pérdida o divulgación no autorizada de información confidencial o sensible.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <ContactMailSharpIcon />
              </svg>
            ),
            color: colors.blueGrey,
          },
          {
            title: 'Intrusiones internas',
            subtitle:
              'Acceso no autorizado o actividades maliciosas realizadas por empleados o usuarios internos de una organización.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <BadgeSharpIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Robo de identidad',
            subtitle:
              'El uso fraudulento de la identidad de una persona para cometer actividades delictivas.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <ReportProblemSharpIcon />
              </svg>
            ),
            color: colors.lightBlue,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box width={1} height={'100%'} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={item.color[themeMode === 'light' ? 50 : 100]}
                  color={item.color[themeMode === 'light' ? 500 : 700]}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Services1.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services1;
