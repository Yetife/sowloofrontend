import React from 'react';
import { Grid, Box, Typography, Link, TextField, Stack, Button } from '@mui/material';
import BackgroundPicture from '../assets/images/LoginImageFolder/BackgroundPicture.svg';
import { useFormik } from 'formik';

function Register() {
    const btn = {
        width: '620px',
        height: '60px',
        background: '#00FF84',
        color: '#000'
    };
    const form = {
        background: '#FFFFFF'
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <Grid container lg={12} height="100vh" width="100vw">
            <Grid item lg={5} backgroundColor="#140342">
                <Grid container justifyContent="center" alignItems="center">
                    <img src={BackgroundPicture} alt="backgroundPicture" />
                </Grid>
            </Grid>
            <Grid item lg={7}>
                <Grid container lg={12} justifyContent="center" alignItems="center" height="100vh" width="100vw" backgroundColor="#FEFBF4">
                    <Box height="500px" width="720px" backgroundColor="#FFF" padding="50px">
                        <Typography fontWeight="700" fontSize="30px" lineHeight="34px" marginBottom="10px">
                            Sign Up
                        </Typography>
                        <Typography fontWeight="400" fontSize="15px" marginBottom="30px" lineHeight="26px" color="#4F547B" width="410px">
                            Already have an account? Log in
                        </Typography>
                        <form style={form} onSubmit={formik.handleSubmit}>
                            <Box container width="620px" height="301px" lg={12} display="flex" justifyContent="center" alignItems="center">
                                <Grid item lg={6}>
                                    <Stack container marginRight="30px">
                                        <Typography color="#140342" marginBottom="10px" fontWeight="700" fontSize="16px" lineHeight="18px">
                                            Email-Address
                                        </Typography>
                                        <TextField
                                            id="email"
                                            type="email"
                                            autoComplete="current-password"
                                            marginBottom="30px"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        <Typography
                                            color="#140342"
                                            marginBottom="10px"
                                            marginTop="20px"
                                            fontWeight="700"
                                            fontSize="16px"
                                            lineHeight="18px"
                                        >
                                            Password
                                        </Typography>
                                        <TextField
                                            id="password"
                                            type="password"
                                            autoComplete="current-password"
                                            marginBottom="30px"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item lg={6}>
                                    <Stack container>
                                        <Typography color="#140342" marginBottom="10px" fontWeight="700" fontSize="16px" lineHeight="18px">
                                            Username
                                        </Typography>
                                        <TextField
                                            id="username"
                                            type="name"
                                            autoComplete="current-password"
                                            onChange={formik.handleChange}
                                            value={formik.values.username}
                                        />
                                        <Typography
                                            color="#140342"
                                            marginTop="20px"
                                            marginBottom="10px"
                                            fontWeight="700"
                                            fontSize="16px"
                                            lineHeight="18px"
                                        >
                                            Confirm Password
                                        </Typography>
                                        <TextField
                                            id="confirmPassword"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={formik.handleChange}
                                            value={formik.values.confirmPassword}
                                        />
                                    </Stack>
                                </Grid>
                            </Box>
                            <Button variant="contained" type="submit" style={btn}>
                                Register
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Register;
