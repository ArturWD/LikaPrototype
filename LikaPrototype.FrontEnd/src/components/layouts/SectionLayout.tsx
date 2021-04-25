import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '&:not(:last-child)': {
                marginBottom: theme.spacing(6),
            },
        },
        headerContainer: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {},
        sectionContent: {},
    })
);

type SectionLayoutProps = {
    sectionTitle: string;
};
const SectionLayout: React.FunctionComponent<SectionLayoutProps> = (props) => {
    const { sectionTitle } = props;
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <div className={classes.headerContainer}>
                <Typography
                    className={classes.sectionTitle}
                    component="h2"
                    variant="h3"
                >
                    {sectionTitle}
                </Typography>
            </div>
            <div className={classes.sectionContent}>{props.children}</div>
        </section>
    );
};
export default SectionLayout;
