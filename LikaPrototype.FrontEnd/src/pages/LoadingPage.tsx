import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import Loader from '../components/Loader';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100vw',
            height: '100vh',
        },
    })
);
type LoadingPageProps = {
    message?: string;
};
export const LoadingPage: React.FunctionComponent<LoadingPageProps> = (
    props
) => {
    const classes = useStyles();

    return <Loader className={classes.root} />;
};

export default LoadingPage;
