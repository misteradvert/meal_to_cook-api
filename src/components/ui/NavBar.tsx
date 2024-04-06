import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Link } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgb(77, 78, 83)',
          borderRadius: '15px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <Toolbar variant="dense">
          <Button className="buttonsNavbar">
            <Link
              component={NavLink}
              to="/"
              sx={{
                color: 'rgb(225, 240, 230)',
                marginRight: 2,
                fontFamily: 'Sen, sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>
          </Button>

          <Button>
            <Link
              component={NavLink}
              to="/meals"
              sx={{
                color: 'rgb(225, 240, 230)',
                marginRight: 2,
                fontFamily: 'Sen, sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                textDecoration: 'none',
              }}
            >
              Categories
            </Link>
          </Button>

          <Button>
            <Link
              component={NavLink}
              to="/randommeal"
              sx={{
                color: 'rgb(225, 240, 230)',
                marginRight: 2,
                fontFamily: 'Sen, sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                textDecoration: 'none',
              }}
            >
              Random meal
            </Link>
          </Button>

          <Button>
            <Link
              component={NavLink}
              to="/search"
              sx={{
                color: 'rgb(225, 240, 230)',
                marginRight: 2,
                fontFamily: 'Sen, sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                textDecoration: 'none',
              }}
            >
              Search meal
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
