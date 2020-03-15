import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard.jsx';
import User from './User.jsx';
import Table from './Table.jsx';

const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user" component={User} />
            <Route path="/table" component={Table} />
        </Switch>
    );
}

export default Content;