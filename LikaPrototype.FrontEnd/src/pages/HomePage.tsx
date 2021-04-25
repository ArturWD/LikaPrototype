import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme, Grid, Paper, Typography } from '@material-ui/core';

import PageLayout from '../components/layouts/PageLayout';
import SectionLayout from '../components/layouts/SectionLayout';
import ExerciseCard from '../exercises/common/components/ExerciseCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            backgroundColor: theme.colors.backgroundSecondary,
            borderRadius: theme.spacing(4),
            height: '100%',
            minHeight: 150,
            boxShadow: 'none',
            //boxShadow: '0px 4px 8px 0px rgba(34, 60, 80, 0.2)',
            '&:hover': {
                boxShadow:
                    'rgb(0 0 0 / 3%) 0px 8px 32px, rgb(0 0 0 / 3%) 0px 4px 16px, rgb(0 0 0 / 3%) 0px 2px 8px, rgb(0 0 0 / 3%) 0px 1px 4px',
            },
        },
        exerciseCard: {},
        sectionPartTitle: {
            marginBottom: theme.spacing(2),
        },
    })
);

const HomePage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <PageLayout pageTitle="Home">
            <SectionLayout sectionTitle="Vocabulary training">
                <Grid container spacing={4} alignItems="stretch">
                    <Grid item xs={4}>
                        <ExerciseCard
                            exerciseId="buildSentences"
                            className={classes.exerciseCard}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>item</Paper>
                    </Grid>
                </Grid>
            </SectionLayout>
            <SectionLayout sectionTitle="Reading training"></SectionLayout>
            <SectionLayout sectionTitle="Grammar training"></SectionLayout>
            <SectionLayout sectionTitle="Explore content"></SectionLayout>
        </PageLayout>
    );
};
export default HomePage;
