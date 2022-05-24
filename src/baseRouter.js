import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Calendar from "./components/Dashboard/Calendar";
import PopularContent from "./components/HomePage/PopularContents/PopularContent";
import EditContent from "./components/Dashboard/EditContent";


const BaseRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage />}/>
                <Route path={"/dashboard"} element={<Dashboard />}>
                    <Route path={'/dashboard/calendar'} element={ <Calendar />}/>
                </Route>
                {/*<Route path="/content/:id" element={<PopularContent />}/>*/}
                {/*<Route path='/edit-content/:id' element={<EditContent />} />*/}
            </Routes>
        </div>
    );
};

export default BaseRouter;