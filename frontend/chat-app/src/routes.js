import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Form from './components/Form';
import Socket from './components/Socket';
import History from './components/History';

const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Form} />
            <Route exact path='/chat' component={Socket} />
            <Route exact path='/history' component={History}/>
            <Redirect to='/'/>
        </Switch>
    </div>
)

export default BaseRouter;