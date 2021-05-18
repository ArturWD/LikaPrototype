import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

import { exercisePagesMap, exercisesMap } from '.';

type ExerciseRouteProp = Partial<RouteProps> & {
    exerciseIds: string[];
};
const ExercisesRouter: React.FunctionComponent<ExerciseRouteProp> = (props) => {
    const { exerciseIds, ...routeProps } = props;

    return (
        <Switch>
            {exerciseIds.map((id) => (
                <Route
                    key={id}
                    {...routeProps}
                    path={exercisesMap.get(id)?.link}
                    component={exercisePagesMap.get(id)}
                />
            ))}
        </Switch>
    );
};
export default ExercisesRouter;
