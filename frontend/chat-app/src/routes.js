import React from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Form} />
    </div>
)

export default BaseRouter;