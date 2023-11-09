import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
      <Grid container spacing={2}>
  <Grid item xs={12} sm={3}>
    <SideBar />
  </Grid>
  <Grid item xs={12} sm={9}>
    <Content>
      <Outlet />
    </Content>
  </Grid>
</Grid>

      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
