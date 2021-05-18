import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { exercisePagesMap, exercisesMap } from '.';

type ExerciseRouteProp = Partial<RouteProps> & {
    exerciseId: string;
};
const ExerciseRoute: React.FunctionComponent<ExerciseRouteProp> = (props) => {
    const { exerciseId, ...routeProps } = props;
    const exercisePage = exercisePagesMap.get(props.exerciseId);
    const exerciseConfig = exercisesMap.get(props.exerciseId);
    if (!exercisePage || !exerciseConfig) {
        throw new Error(
            `Exercise with id of ${props.exerciseId} has no configuration`
        );
    }
    console.log('render', props.exerciseId);
    return (
        <Route
            path={exerciseConfig.link}
            component={exercisePage}
            {...routeProps}
        />
    );
};
export default ExerciseRoute;
