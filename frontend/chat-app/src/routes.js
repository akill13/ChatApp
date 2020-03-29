import React from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
import Chat from './components/Chat';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Form} />
        <Route exact path='/chat' component={Chat} />
    </div>
)

export default BaseRouter;