import { Theme, createStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
    createStyles({
        root: {},
        logo: {
            height: theme.spacing(10),
            width: 'auto',
        },
        topItems: {
            marginBottom: theme.spacing(4),
        },
        bottomItems: {
            marginTop: 'auto',
        },
        separator: {},
    });

export default styles;
