import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import { spaUrls } from '../../common/urls';

const Router: React.FunctionComponent = (props) => {
    return (
        <Switch>
            <Route
                exact
                path={spaUrls.vocabulary.vocabulary()}
                component={MainPage}
            />
            <Redirect to={spaUrls.vocabulary.vocabulary()} />
        </Switch>
    );
};

export default Router;
