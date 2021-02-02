import React from 'react';
import {Container, Grid, Toolbar, Typography} from '@material-ui/core';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import Header from './components/Header';

const INITIAL_FORM_STATE = {}

const FORM_VALIDATION = Yup.object().shape({});

function App() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <Toolbar/>
                    <Typography variant="h4">React Forms</Typography>

                    <Formik
                        initialValues={{...INITIAL_FORM_STATE}}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={console.log}
                    >
                        <Form>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <Typography>Your details</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography>Address</Typography>
                                </Grid>


                                <Grid item xs={12}>
                                    <Typography>Booking information</Typography>
                                </Grid>

                            </Grid>

                        </Form>
                    </Formik>
                </Container>
            </Grid>
        </Grid>
    )
}

export default App;
