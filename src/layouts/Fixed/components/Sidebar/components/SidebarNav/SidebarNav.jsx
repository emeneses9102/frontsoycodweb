import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import LoadingSpinner from '../../../../../../common/components/UIElements/LoadingSpinnerSmall';
import { NavLink } from 'react-router-dom';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Box
        justifyContent={'flex-end'}
        onClick={() => onClose()}
        sx={{ display: { md: 'none', sm: 'flex' } }}
      >
        <CloseIcon fontSize="small" />
      </Box>
      <Box>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Box>
            {' '}
            {pages.map((item, i) => (
              <Box key={item.id} marginBottom={2}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: 1,
                    display: 'block',
                  }}
                >
                  <Button
                    component={NavLink}
                    to={item.href}
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      color:
                        activeLink === item.href
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      backgroundColor:
                        activeLink === item.href
                          ? alpha(theme.palette.primary.main, 0.1)
                          : 'transparent',
                    }}
                    onClick={() => onClose()}
                  >
                    {item.title}
                  </Button>
                </Typography>
                <Box>
                  {item.pages.map((p, i) => (
                    <Box marginBottom={1 / 2} key={p.title}>
                      <Button
                        component={NavLink}
                        to={p.href}
                        target={p.target}
                        fullWidth
                        sx={{
                          justifyContent: 'flex-start',
                          color:
                            activeLink === p.href
                              ? theme.palette.primary.main
                              : theme.palette.text.primary,
                          backgroundColor:
                            activeLink === p.href
                              ? alpha(theme.palette.primary.main, 0.1)
                              : 'transparent',
                          fontWeight: activeLink === p.href ? 600 : 400,
                        }}
                        onClick={() => onClose()}
                      >
                        {p.title}
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
