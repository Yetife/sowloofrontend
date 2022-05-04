import React from 'react';
import { Grid, Box, Typography, Stack, Input, TextField, Button, Checkbox } from '@mui/material';
import BackgroundPicture from '../assets/images/LoginImageFolder/BackgroundPicture.svg';
import { useFormik } from 'formik';

function Login() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const form = {
        background: '#FFFFFF'
    };
    const checkBox = {
        marginTop: '348px',
        marginLeft: '50px',
        position: 'absolute'
    };

    const input = {
        marginBottom: '50px',
        //   marginTop : "40px",
        width: '420px',
        height: '34px',
        fontSize: '20px',
        fontWeight: '800'
    };

    const btn = {
        width: '420px',
        height: '60px',
        background: '#00FF84',
        color: '#FFFF',
        marginTop: '391px',
        marginLeft: '50px'
    };
    const Remember = {
        width: '120px',
        position: 'absolute',
        marginTop: '356px',
        marginLeft: '80px',
        cursor: 'pointer'
    };

    const Forgot = {
        width: '200px',
        position: 'absolute',
        marginTop: '356px',
        marginLeft: '280px',
        cursor: 'pointer'
    };

    const facebook = {
        width: '200px',
        height: '45px',
        position: 'absolute',
        marginTop: '508px',
        marginLeft: '50px',
        color: 'red'
    };

    const goggle = {
        width: '200px',
        position: 'absolute',
        height: '45px',
        marginTop: '508px',
        marginLeft: '270px',
        color: '#1967D2'
    };

    return (
        <Grid container lg={12} backgroundColor="black" height="100vh" width="100vw">
            <Grid item lg={5}>
                <Grid backgroundColor="#140342" position="absolute">
                    <Box marginLeft="103px" marginTop="185px">
                        <img src={BackgroundPicture} alt="backgroundPicture" />
                    </Box>
                </Grid>
            </Grid>
            <Grid item lg={7} backgroundColor="red">
                <Grid container>
                    <Grid backgroundColor="#FEFBF4">
                        <Grid container height="603px" width="520px" backgroundColor="#FFF" marginTop="178px" marginLeft="338px">
                            <Typography
                                fontSize="30px"
                                fontWeight="700"
                                position="absolute"
                                marginLeft="50px"
                                marginBottom="30px"
                                marginTop="50px"
                            >
                                Log
                            </Typography>
                            <Typography
                                fontSize="20px"
                                fontWeight="400"
                                color="#4F547B"
                                position="absolute"
                                marginTop="114px"
                                marginLeft="50px"
                            >
                                Dont have an account yet? <a href="x">sign up for free</a>
                            </Typography>

                            <form style={form} onSubmit={formik.handleSubmit}>
                                <Grid position="absolute" marginTop="178px" paddingLeft="50px" width="420px">
                                    <TextField
                                        style={input}
                                        id="username"
                                        label="Username"
                                        name="username"
                                        type="text"
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                    />
                                </Grid>

                                <Grid position="absolute" marginTop="281px" paddingLeft="50px" width="420px">
                                    <TextField
                                        style={input}
                                        id="lastName"
                                        label="Lastname"
                                        type="text"
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                    />
                                </Grid>

                                <Checkbox style={checkBox} />
                                <Typography style={Remember}>Remember me</Typography>

                                <Typography style={Forgot}>Forgot your password?</Typography>

                                <Button variant="contained" type="submit" style={btn}>
                                    Log in
                                </Button>
                            </form>
                            <Button variant="outlined" style={facebook}>
                                Log in via facebook
                            </Button>
                            <Button variant="outlined" style={goggle}>
                                Log in via google
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;
