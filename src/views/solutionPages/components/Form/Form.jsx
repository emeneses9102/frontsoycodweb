import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const baseUrl = 'http://200.66.71.205:8080/api/contact';

const Form = () => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [sending, isSending] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  useEffect(() => {
    setActiveButton(true);
  }, []);

  const [datos, setDatos] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    jobTitle: '',
    fullMessage: '',
  });

  const [responseDatos, setResponseDatos] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    jobTitle: '',
    fullMessage: '',
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    isSending(true);
    axios
      .post(`${baseUrl}/registernew`, {
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(6000),
        fullName: datos.fullName != undefined ? datos.fullName : '',
        businessEmail:
          datos.businessEmail != undefined ? datos.businessEmail : '',
        phoneNumber: datos.phoneNumber != undefined ? datos.phoneNumber : '',
        companyName: datos.companyName != undefined ? datos.companyName : '',
        jobTitle: datos.jobTitle != undefined ? datos.jobTitle : '',
        fullMessage: datos.fullMessage != undefined ? datos.fullMessage : '',
      })
      .then((response) => {
        // console.log(response);
        if (response.data.flag) {
          enqueueSnackbar('' + response.data.message, {
            variant: response.data.flag ? 'success' : 'error',
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
          });
          event.target.reset();
          isSending(false);
          setActiveButton(false);
        } else {
          isSending(false);
          if (response.data.flagEmail != 'emailIssue') {
            setResponseDatos(response.data.data);
          }
          enqueueSnackbar('Uno o más campos tienen un error.', {
            variant: 'error',
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
          });
        }
      })
      .catch((error) => {
        isSending(false);
        enqueueSnackbar('Ocurrio un error, intenta más tarde', {
          variant: 'error',
          anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        });
        console.log('errando ', error);
      });
  };

  return (
    <>
      <Box>
        {activeButton ? (
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={'100%'}
            component={Card}
            borderRadius={2}
            boxShadow={4}
            marginBottom={4}
          >
            <Box
              component="form"
              autoComplete="off"
              onSubmit={onSubmit}
              sx={{ display: 'grid', gap: '2' }}
            >
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Nombre completo *"
                    name={'fullName'}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    onChange={handleInputChange}
                    helperText={
                      responseDatos.fullName != undefined
                        ? responseDatos.fullName.msg != undefined
                          ? responseDatos.fullName.msg
                          : ''
                        : '¡Ok!'
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Correo corporativo *"
                    name={'businessEmail'}
                    type="email"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    onChange={handleInputChange}
                    helperText={
                      responseDatos.businessEmail != undefined
                        ? responseDatos.businessEmail.msg != undefined
                          ? responseDatos.businessEmail.msg
                          : ''
                        : '¡Ok!'
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Teléfono *"
                    name={'phoneNumber'}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    onChange={handleInputChange}
                    helperText={
                      responseDatos.phoneNumber != undefined
                        ? responseDatos.phoneNumber.msg != undefined
                          ? responseDatos.phoneNumber.msg
                          : ''
                        : '¡Ok!'
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Empresa"
                    name={'companyName'}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Puesto Laboral"
                    name={'jobTitle'}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Escribe tu mensaje"
                    name={'fullMessage'}
                    multiline
                    rows={4}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <LoadingButton
                    type="submit"
                    sx={{ height: 54 }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                    loadingIndicator={'Enviando...'}
                    loading={sending}
                    onSubmit={onSubmit}
                  >
                    Enviar
                  </LoadingButton>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography component="p" variant="body2" align="center">
                      Al hacer clic en "enviar" acepta nuestra{' '}
                      <Box
                        component="a"
                        href=""
                        color={theme.palette.text.primary}
                        fontWeight={'700'}
                      >
                        Política de privacidad.
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box
              padding={{ xs: 3, sm: 6 }}
              width={'100%'}
              component={Card}
              borderRadius={2}
              boxShadow={4}
              marginBottom={4}
              data-aos={isMd ? 'fade-right' : 'fade-up'}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Registro enviado{' '}
                <CheckCircleOutlineIcon
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 40,
                  }}
                  style={{ fill: '#0072ea' }}
                />
              </Typography>
            </Box>
          </Box>
        )}

        <Box>
          <Typography color="text.secondary" align={'center'}>
            Horario de atención Lunes a viernes de 9:00 a. m. a 6:00 p. m.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Form;
