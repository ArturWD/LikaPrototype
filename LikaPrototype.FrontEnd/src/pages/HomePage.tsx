import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        submitButton: {
            marginTop: theme.spacing(2),
            backgroundColor: theme.colors.accent,
            height: theme.spacing(12),
            borderRadius: theme.spacing(2),
            color: theme.colors.backgroundMain,
            fontWeight: theme.typography.fontWeightBold,
        },
        errorAlert: {},
        secondaryText: {
            color: theme.colors.textSecondary,
            fontWeight: theme.typography.fontWeightBold,
            textDecoration: 'none',
        },
        iconButtonStyles: {
            color: theme.colors.textSecondary,
        },
        formUnderBlock: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        secondaryActionButton: {
            color: theme.colors.accent,
            fontWeight: theme.typography.fontWeightBold,
        },
        secondaryActionText: {
            color: theme.colors.textSecondary,
            fontWeight: theme.typography.fontWeightBold,
            marginRight: theme.spacing(1),
        },
    })
);

const HomePage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return <div>Home</div>;
};
export default HomePage;
