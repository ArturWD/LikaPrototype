import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import { spaUrls } from '../../common/urls';
import ExerciseRoute from '../../exercises/ExerciseRoute';
import { exercisesIds } from '../../exercises';

const Router: React.FunctionComponent = (props) => {
    return (
        <Switch>
            <Route
                exact
                path={spaUrls.reading.reading()}
                component={MainPage}
            />
            <ExerciseRoute exerciseId={exercisesIds.understandingQuizId} />
            <Redirect to={spaUrls.reading.reading()} />
        </Switch>
    );
};

export default Router;
