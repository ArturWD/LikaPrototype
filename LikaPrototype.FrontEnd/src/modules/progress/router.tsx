import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import { spaUrls } from '../../common/urls';

const Router: React.FunctionComponent = (props) => {
    return (
        <Switch>
            <Route
                exact
                path={spaUrls.progress.progress()}
                component={MainPage}
            />
            <Redirect to={spaUrls.progress.progress()} />
        </Switch>
    );
};

export default Router;
