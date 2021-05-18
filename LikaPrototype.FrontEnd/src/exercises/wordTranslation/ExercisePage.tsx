import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

import PageLayout from '../../components/layouts/PageLayout';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        exerciseList: {},
        exerciseListItem: {},
    })
);

const ExercisePage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <PageLayout pageTitle="Word translation">Word translation</PageLayout>
    );
};
export default ExercisePage;
