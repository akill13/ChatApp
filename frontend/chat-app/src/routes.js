import React from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
import Chat from './components/Chat';
import Socket from './components/Socket';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Form} />
        <Route exact path='/chat' component={Socket} />
    </div>
)

export default BaseRouter;