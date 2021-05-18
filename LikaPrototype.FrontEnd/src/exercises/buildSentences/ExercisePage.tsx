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
        text: 'Grammar training',
        link: spaUrls.writing.writing(),
    },
];

const ExercisePage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <PageLayout breadcrumbs={breadcrumbs} pageTitle="Build sentences">
            Build sentences
        </PageLayout>
    );
};
export default ExercisePage;
