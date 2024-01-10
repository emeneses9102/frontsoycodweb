import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const baseUrl = 'http://200.66.71.205:8080/api/event';

const Form = ({ setNameEvent = test, flag }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [activeButton, setActiveButton] = useState(false);
  const [sending, isSending] = useState(false);
  const [datos, setDatos] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    eventExpectations: '',
    jobTitle: '',
    companyName: '',
    nameEvent: setNameEvent,
  });
  const [responseDatos, setResponseDatos] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    eventExpectations: '',
    jobTitle: '',
    companyName: '',
    nameEvent: setNameEvent,
  });
  useEffect(() => {
    setActiveButton(true);
  }, []);

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
      .post(`${baseUrl}/registerparticipant`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
        signal: AbortSignal.timeout(6000),

        fullName: datos.fullName != undefined ? datos.fullName : '',
        businessEmail:
          datos.businessEmail != undefined ? datos.businessEmail : '',
        phoneNumber: datos.phoneNumber != undefined ? datos.phoneNumber : '',
        eventExpectations:
          datos.eventExpectations != undefined ? datos.eventExpectations : '',
        nameEvent: datos.nameEvent != undefined ? datos.nameEvent : '',
        jobTitle: datos.jobTitle != undefined ? datos.jobTitle : '',
        companyName: datos.companyName != undefined ? datos.companyName : '',
      })
      .then((response) => {
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
    <Box>
      {activeButton ? (
        <Box>
          <Box marginBottom={1}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'textSecondary'}
            ></Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {flag ? '¡Falta muy poco!' : 'Queremos conocer tu opinión'}{' '}
              <InsertEmoticonIcon
                variant="h4"
                sx={{
                  fontWeight: 700,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 30,
                }}
              />
            </Typography>
          </Box>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={onSubmit}
            sx={{ display: 'grid', gap: '2' }}
          >
            <Grid container spacing={1} data-aos={'fade-up'}>
              <Grid item xs={12} sm={12} xl={12} lg={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                ></Typography>
                <TextField
                  label="Nombre Completo *"
                  variant="outlined"
                  name={'fullName'}
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
              <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                ></Typography>
                <TextField
                  label="Correo Corporativo *"
                  variant="outlined"
                  name={'businessEmail'}
                  type={'email'}
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
              <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                ></Typography>
                <TextField
                  label="Teléfono *"
                  variant="outlined"
                  name={'phoneNumber'}
                  type={'text'}
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
              <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                ></Typography>
                <TextField
                  label="Puesto Laboral *"
                  variant="outlined"
                  name={'jobTitle'}
                  type={'text'}
                  fullWidth
                  onChange={handleInputChange}
                  helperText={
                    responseDatos.jobTitle != undefined
                      ? responseDatos.jobTitle.msg != undefined
                        ? responseDatos.jobTitle.msg
                        : ''
                      : '¡Ok!'
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                ></Typography>
                <TextField
                  label="Empresa *"
                  variant="outlined"
                  name={'companyName'}
                  type={'text'}
                  fullWidth
                  onChange={handleInputChange}
                  helperText={
                    responseDatos.companyName != undefined
                      ? responseDatos.companyName.msg != undefined
                        ? responseDatos.companyName.msg
                        : ''
                      : '¡Ok!'
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} xl={12} lg={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                ></Typography>
                <TextField
                  label={flag ? 'Expectativas del evento' : 'Temas de interés'}
                  variant="outlined"
                  name={'eventExpectations'}
                  type={'text'}
                  fullWidth
                  multiline
                  rows={4}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} xl={12} lg={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                ></Typography>
                <TextField
                  label="Nombre del Evento "
                  variant="outlined"
                  name={'nameEvent'}
                  type={'text'}
                  value={setNameEvent}
                  fullWidth
                  disabled
                  onChange={handleInputChange}
                  sx={{ display: 'none' }}
                />
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={'100%'}
                  maxWidth={600}
                  margin={'0 auto'}
                >
                  <LoadingButton
                    sx={{ marginTop: 2 }}
                    type="submit"
                    variant="contained"
                    loading={sending}
                    loadingIndicator={'Enviando...'}
                    fullWidth
                    onSubmit={onSubmit}
                  >
                    {flag ? 'Obtener invitación' : 'Enviar'}
                  </LoadingButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box marginBottom={1}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Registro enviado{' '}
              <EventAvailableIcon
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
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
                marginBottom: 2,
                marginTop: 2,
              }}
              gutterBottom
              color={'textSecondary'}
            >
              ¡Agradecemos el interés!
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
              }}
            ></Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default Form;
