import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import { spaUrls } from '../../common/urls';

const Router: React.FunctionComponent = (props) => {
    return (
        <Switch>
            <Route
                exact
                path={spaUrls.writing.writing()}
                component={MainPage}
            />
            <Redirect to={spaUrls.writing.writing()} />
        </Switch>
    );
};

export default Router;
