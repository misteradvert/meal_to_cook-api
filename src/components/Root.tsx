import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';

export default function Root(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}
