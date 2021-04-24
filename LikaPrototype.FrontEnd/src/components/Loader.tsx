import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography, LinearProgress } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import cn from 'classnames';

import logoFull from '../assets/logoFull.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(4),
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 250,
        },
        logo: {
            width: '80%',
            height: 'auto',
            marginBottom: theme.spacing(4),
        },
        progressBar: {
            width: '100%',
            borderRadius: theme.spacing(1),
            height: 3,
            marginTop: theme.spacing(4),
        },
        colorPrimary: {
            backgroundColor: fade(theme.colors.accent as string, 0.2),
        },
        bar: {
            backgroundColor: fade(theme.colors.accent as string, 0.6),
        },
        text: {
            marginTop: theme.spacing(2),
            textAlign: 'center',
            color: theme.colors.textSecondary,
        },
    })
);
type LoaderProps = {
    className?: string;
    height?: string;
    width?: string;
    variant?: 'logo';
    message?: string;
};
export const Loader: React.FunctionComponent<LoaderProps> = (props) => {
    const classes = useStyles();

    return (
        <div
            className={cn(classes.root, props.className)}
            style={{ height: props.height, width: props.width }}
        >
            <div className={classes.contentWrapper}>
                <img className={classes.logo} src={logoFull} alt={'logoFull'} />
                <LinearProgress
                    className={classes.progressBar}
                    classes={{
                        colorPrimary: classes.colorPrimary,
                        bar: classes.bar,
                    }}
                />
                {props.message && (
                    <Typography className={classes.text}>
                        {props.message}
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default Loader;
