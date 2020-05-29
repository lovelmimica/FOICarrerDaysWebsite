import React from 'react';
import { Route } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Events from '../../pages/Events';
import Speakers from '../../pages/Speakers';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Main = () => {
    return (
        <main>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/events" component={Events} />
            <PrivateRoute path="/speakers" component={Speakers} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
        </main>
    );
}

export default Main;