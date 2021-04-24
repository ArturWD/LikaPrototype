import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { spaUrls } from '../../common/urls';
import Container from './Container';
import Navbar from '../Navbar';

const SIDEBAR_WIDTH = 250;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
        },
        sidebarContainer: {
            flex: 'none',
            width: SIDEBAR_WIDTH,
            boxShadow:
                'rgb(0 0 0 / 3%) 0px 8px 32px, rgb(0 0 0 / 3%) 0px 4px 16px, rgb(0 0 0 / 3%) 0px 2px 8px, rgb(0 0 0 / 3%) 0px 1px 4px',
            padding: theme.spacing(4, 6),
            backgroundColor: theme.colors.backgroundSecondary,
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
        },
        mainContainer: {
            marginLeft: SIDEBAR_WIDTH,
            flex: '1 1 auto',
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        breadcrumbsContainer: {},
        headerContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        backButton: {
            marginRight: theme.spacing(2),
            color: theme.colors.textMain,
            transition: 'color 200ms ease-in-out',
            '&:hover': {
                color: theme.colors.accent,
            },
        },
        pageTitle: {},
    })
);

type RootLayoutProps = {};
const RootLayout: React.FunctionComponent<RootLayoutProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <aside className={classes.sidebarContainer}>
                <Navbar />
            </aside>
            <div className={classes.mainContainer}>
                <Container>{props.children}</Container>
            </div>
        </div>
    );
};
export default RootLayout;
