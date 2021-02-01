import React from 'react';
import {Container, Grid, Toolbar, Typography} from '@material-ui/core'
import Header from "./components/Header";



function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
        <Grid item xs={12}>
            <Container maxWidth="md">
                <Toolbar/>
                <Typography variant="h4">React Forms</Typography>
            </Container>
        </Grid>
    </Grid>
  )
}

export default App;
