import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import ArrowBack from '@material-ui/icons/ArrowBack';

import {
    default as Breadcrumbs,
    IBreadcrumb,
} from '../Breadcrumbs/Breadcrumbs';
import { spaUrls } from '../../common/urls';
import Container from './Container';
import Navbar from '../Navbar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
        },
        sidebarContainer: {
            flex: 'none',
            width: 250,
            boxShadow:
                'rgb(0 0 0 / 3%) 0px 8px 32px, rgb(0 0 0 / 3%) 0px 4px 16px, rgb(0 0 0 / 3%) 0px 2px 8px, rgb(0 0 0 / 3%) 0px 1px 4px',
            padding: theme.spacing(4),
            backgroundColor: theme.colors.backgroundSecondary,
        },
        mainContainer: {
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

type RootLayoutProps = {
    pageTitle: string;
    breadcrumbs?: IBreadcrumb[];
};
const RootLayout: React.FunctionComponent<RootLayoutProps> = (props) => {
    const { pageTitle } = props;
    const history = useHistory();
    const classes = useStyles();
    const breadcrumbs =
        props.breadcrumbs && props.breadcrumbs.length > 0
            ? props.breadcrumbs
            : undefined;

    const handleGoBackClick = () => {
        const activeBreadcrumbs = (breadcrumbs || [])
            .map((b) => b.link)
            .filter(Boolean) as string[];

        const backURL =
            activeBreadcrumbs.length > 0
                ? activeBreadcrumbs[activeBreadcrumbs.length - 1]
                : spaUrls.home();
        history.push(backURL);
    };

    return (
        <div className={classes.root}>
            <aside className={classes.sidebarContainer}>
                <Navbar />
            </aside>
            <div className={classes.mainContainer}>
                <Container>
                    {breadcrumbs && (
                        <div className={classes.breadcrumbsContainer}>
                            <Breadcrumbs breadcrumbs={breadcrumbs} />
                        </div>
                    )}

                    <div className={classes.headerContainer}>
                        {true && (
                            <IconButton
                                className={classes.backButton}
                                onClick={handleGoBackClick}
                            >
                                <ArrowBack />
                            </IconButton>
                        )}
                        <Typography
                            className={classes.pageTitle}
                            component="h1"
                            variant="h2"
                        >
                            {pageTitle}
                        </Typography>
                    </div>
                    <div>{props.children}</div>
                </Container>
            </div>
        </div>
    );
};
export default RootLayout;
