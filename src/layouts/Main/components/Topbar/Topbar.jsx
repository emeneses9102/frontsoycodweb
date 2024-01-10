import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Sycod from '../../../../svg/logos/SycodMain';
import { NavLink } from 'react-router-dom';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AdbIcon from '@mui/icons-material/Adb';

const navLinks = [
  { title: 'Inicio', path: '/', icon: <AccessAlarmIcon /> },
  { title: 'Soluciones', path: '/soluciones', icon: <AccessibilityIcon /> },
  { title: 'Alianzas', path: '/alianzas', icon: <AdbIcon /> },
  { title: 'Blog', path: '/blog', icon: <AdbIcon /> },
  { title: 'Eventos', path: '/eventos', icon: <AdbIcon /> },
  { title: 'Contacto', path: '/contacto', icon: <AdbIcon /> },
];

const Topbar = ({ themeMode, themeToggler, onSidebarOpen }) => {

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Sycod />
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box>
          <IconButton
            onClick={() => themeToggler()}
            aria-label="Dark mode toggler"
            color={themeMode === 'light' ? 'primary' : 'secondary'}
          >
            {themeMode === 'light' ? (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          {navLinks.map((item) => (
            <Box marginX={2} key={item.title}>
              <Link
                underline="none"
                to={item.path}
                color={'textPrimary'}
                component={NavLink}
              >
                {item.title}
              </Link>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          <Box marginLeft={2}>
            <IconButton
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://www.facebook.com/SYCOD4.0/"
              size="large"
            >
              <FacebookIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://twitter.com/grupo_sycod"
              size="large"
            >
              <TwitterIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://www.linkedin.com/company/sycod-mx/mycompany/"
              size="large"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://www.youtube.com/channel/UCbqVgRQkuyyOAPaVoWHowmA/featured"
              size="large"
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
