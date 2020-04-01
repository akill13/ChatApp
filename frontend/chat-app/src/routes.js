import React from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
import Socket from './components/Socket';
import History from './components/History';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Form} />
        <Route exact path='/chat' component={Socket} />
        <Route exact path='/history' component={History}/>
    </div>
)

export default BaseRouter;