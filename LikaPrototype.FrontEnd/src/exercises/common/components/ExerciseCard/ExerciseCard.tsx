import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, ButtonBase, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { exercisesMap } from '../../..';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            borderRadius: theme.spacing(4),
            backgroundColor: theme.colors.backgroundSecondary,
            padding: theme.spacing(4, 4),
            width: '100%',
            justifyContent: 'initial',
            boxShadow:
                'rgb(0 0 0 / 3%) 0px 8px 32px, rgb(0 0 0 / 3%) 0px 4px 16px, rgb(0 0 0 / 3%) 0px 2px 8px, rgb(0 0 0 / 3%) 0px 1px 4px',
            transition: 'all 200ms ease-in-out',
            '&:hover': {
                boxShadow: '0px 4px 14px 3px rgba(34, 60, 80, 0.2)',
            },
        },
        rootCompact: {
            minHeight: 150,
            display: 'flex',
            flexDirection: 'column',
        },
        headerCompact: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        iconCompact: {
            position: 'absolute',
            height: 'calc(100% - 24px)',
            right: theme.spacing(4),
            bottom: theme.spacing(0),
        },
    })
);

export type ExerciswCardProps = {
    className?: string;
    variant?: 'compact' | 'list';
    exerciseId: string;
};
const ExerciswCard: React.FunctionComponent<ExerciswCardProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { variant = 'compact' } = props;
    const config = exercisesMap.get(props.exerciseId);

    const handleCardClick = () => {
        if (config) {
            history.push(config.link);
        }
    };
    if (!config) {
        throw new Error(
            `Exercise with id of ${props.exerciseId} has no configuration`
        );
    }
    if (variant === 'compact') {
        return (
            <ButtonBase
                onClick={handleCardClick}
                className={cn(
                    classes.root,
                    classes.rootCompact,
                    props.className
                )}
            >
                <div className={classes.headerCompact}>
                    <Typography variant="h3">{config.title}</Typography>
                </div>
                <img
                    src={config.icon}
                    alt={config.title}
                    className={classes.iconCompact}
                ></img>
            </ButtonBase>
        );
    } else {
        return (
            <ButtonBase
                onClick={handleCardClick}
                className={cn(classes.root)}
            ></ButtonBase>
        );
    }
};
export default ExerciswCard;
