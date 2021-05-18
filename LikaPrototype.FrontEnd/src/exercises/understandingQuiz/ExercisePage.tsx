import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

import { spaUrls } from '../../common/urls';
import PageLayout from '../../components/layouts/PageLayout';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        exerciseList: {},
        exerciseListItem: {},
    })
);

const breadcrumbs = [
    {
        text: 'Reading training',
        link: spaUrls.reading.reading(),
    },
];

const ExercisePage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <PageLayout breadcrumbs={breadcrumbs} pageTitle="Understanding quiz">
            Understanding quiz
        </PageLayout>
    );
};
export default ExercisePage;
