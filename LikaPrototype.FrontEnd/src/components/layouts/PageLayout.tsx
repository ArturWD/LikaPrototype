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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
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

type PageLayoutProps = {
    pageTitle: string;
    breadcrumbs?: IBreadcrumb[];
};
const PageLayout: React.FunctionComponent<PageLayoutProps> = (props) => {
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
            {breadcrumbs && (
                <div className={classes.breadcrumbsContainer}>
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
                    variant="h2"
                >
                    {pageTitle}
                </Typography>
            </div>
            <div>{props.children}</div>
        </div>
    );
};
export default PageLayout;
