import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

import RootLayout from '../components/layouts/RootLayout';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const ExploreContent: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <RootLayout pageTitle="Explore content">
            <div>ExploreContent page content</div>
        </RootLayout>
    );
};
export default ExploreContent;
