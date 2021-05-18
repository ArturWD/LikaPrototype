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
                path={spaUrls.vocabulary.vocabulary()}
                component={MainPage}
            />
            <ExerciseRoute exerciseId={exercisesIds.translationWordId} />
            <ExerciseRoute exerciseId={exercisesIds.wordPairsId} />
            <ExerciseRoute exerciseId={exercisesIds.wordTranslationId} />
            <ExerciseRoute exerciseId={exercisesIds.wordsSprintId} />
            <Redirect to={spaUrls.vocabulary.vocabulary()} />
        </Switch>
    );
};

export default Router;
