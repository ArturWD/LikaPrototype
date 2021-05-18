import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import { spaUrls } from '../../common/urls';
import ExerciseRouter from '../../exercises/ExerciseRouter';
import { exercisesIds } from '../../exercises';

const Router: React.FunctionComponent = (props) => {
    return (
        <Switch>
            <Route
                exact
                path={spaUrls.writing.writing()}
                component={MainPage}
            />
            <ExerciseRouter exerciseIds={[exercisesIds.buildSentencesId]} />
            <Redirect to={spaUrls.writing.writing()} />
        </Switch>
    );
};

export default Router;
