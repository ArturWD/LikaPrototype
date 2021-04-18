import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import ArrowBack from '@material-ui/icons/ArrowBack';
import cn from 'classnames';

import {
    default as Breadcrumbs,
    IBreadcrumb,
} from '../Breadcrumbs/Breadcrumbs';
import { spaUrls } from '../../common/urls';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            minHeight: '100vh',
        },
        sidebarContainer: {
            maxWidth: 720,
            paddingLeft: 0,
            paddingRight: 0,
        },
        mainContainer: {},
        mainContentContainer: {},
        breadcrumbsContainer: {},
        headerContainer: {},
        backButton: {},
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
            <aside className={classes.sidebarContainer}>sidebar with nav</aside>
            <div className={classes.root}>
                <main className={classes.root}>
                    {breadcrumbs && (
                        <div className={classes.root}>
                            <Breadcrumbs breadcrumbs={breadcrumbs} />
                        </div>
                    )}

                    <div className={classes.headerContainer}>
                        {breadcrumbs && (
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
                        >
                            {pageTitle}
                        </Typography>
                    </div>
                    <div>{props.children}</div>
                </main>
            </div>
        </div>
    );
};
export default RootLayout;
