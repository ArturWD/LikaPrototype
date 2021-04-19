import { Theme, createStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
        },
        logo: {
            height: theme.spacing(10),
            width: 'auto',
            padding: theme.spacing(0, 2),
            marginBottom: theme.spacing(2),
            alignSelf: 'flex-start',
        },
        topItems: {
            marginBottom: theme.spacing(4),
        },
        bottomItems: {
            marginTop: 'auto',
        },
        separator: {
            height: 2,
            width: '100%',
            borderRadius: 1,
            backgroundColor: theme.colors.textTertiary,
            margin: theme.spacing(4, 0),
        },
        navbarItem: {
            width: '100%',
            marginTop: theme.spacing(2),
        },
    });

export default styles;
