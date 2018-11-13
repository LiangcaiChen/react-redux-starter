import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderPage from '../components/HeaderPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderPage />

            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;