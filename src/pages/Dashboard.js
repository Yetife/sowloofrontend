import React from 'react';
import {Grid} from "@mui/material";
import Sidebar from "../components/Dashboard/Sidebar";
import Calendar from "../components/Dashboard/Calendar";
import {Routes, Route} from 'react-router-dom'
import { Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Sidebar/>
                </Grid>
                <Grid item sm={9.5} xs={10} sx={{marginTop: '80px'}}>
                    {/*<Routes>*/}
                    {/*    <Route path={'/calendar'} element={ <Calendar />}/>*/}
                    {/*</Routes>*/}
                    <Outlet />
                </Grid>
            </Grid>
        </div>

    );
};

export default Dashboard;