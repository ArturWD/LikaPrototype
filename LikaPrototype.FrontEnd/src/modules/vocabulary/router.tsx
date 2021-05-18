import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import { spaUrls } from '../../common/urls';
import ExerciseRouter from '../../exercises/ExerciseRouter';
import { exercisesIds } from '../../exercises';

const Router: React.FunctionComponent = (props) => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path={spaUrls.vocabulary.vocabulary()}
                    component={MainPage}
                />
                <ExerciseRouter
                    exerciseIds={[
                        exercisesIds.translationWordId,
                        exercisesIds.wordPairsId,
                        exercisesIds.wordTranslationId,
                        exercisesIds.wordsSprintId,
                    ]}
                />
                <Redirect to={spaUrls.vocabulary.vocabulary()} />
            </Switch>
        </>
    );
};

export default Router;
