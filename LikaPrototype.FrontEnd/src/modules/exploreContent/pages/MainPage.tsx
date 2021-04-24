import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

import PageLayout from '../../../components/layouts/PageLayout';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const MainPage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <PageLayout pageTitle="Explore content">
            <div>ExploreContent page content</div>
        </PageLayout>
    );
};
export default MainPage;
