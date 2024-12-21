import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth/Auth.jsx";
import Home from "./Home/Homemain/Home.jsx";
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Users from "./User/Users";
import Query from "./Query/Query";
import NotFound from "./NotFound/NotFound.jsx";

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Routes basename={process.env.PUBLIC_URL} >
                    <Route path="/" element={<Navigate to="/userauthentication" />} />
                    <Route path="/userauthentication" element={<Auth />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/user" element={<Users />} />
                    <Route path="/query" element={<Query />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Provider>
        </Fragment>
    );
}

export default App;