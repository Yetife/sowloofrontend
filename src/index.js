import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-datetime/css/react-datetime.css";
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/styles";
import {createTheme} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";
import {store} from './app/store'
import {Provider} from 'react-redux'

const theme = createTheme();
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();