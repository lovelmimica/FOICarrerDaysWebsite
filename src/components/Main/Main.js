import React from 'react';
import { Route } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Events from '../../pages/Events';
import Speakers from '../../pages/Speakers';

const Main = () => {
    return (
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/speakers" component={Speakers} />
        </main>
    );
}

export default Main;