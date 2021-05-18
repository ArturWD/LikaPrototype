import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

import PageLayout from '../../../components/layouts/PageLayout';
import ExerciseCardsList from '../../../exercises/common/components/ExerciseCardsList';
import { exercisesIds } from '../../../exercises';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        exerciseList: {},
        exerciseListItem: {},
    })
);
const EXERCISES = [
    exercisesIds.wordTranslationId,
    exercisesIds.wordsSprintId,
    exercisesIds.wordPairsId,
    exercisesIds.translationWordId,
];
const MainPage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <PageLayout pageTitle="Vocabulary training">
            <ExerciseCardsList exercises={EXERCISES} />
        </PageLayout>
    );
};
export default MainPage;
