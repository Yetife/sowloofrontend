import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Calendar from "./components/Dashboard/Calendar";


const BaseRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage />}/>
                <Route path={"/dashboard"} element={<Dashboard />}>
                    <Route path={'/dashboard/calendar'} element={ <Calendar />}/>
                </Route>
            </Routes>
        </div>
    );
};

export default BaseRouter;