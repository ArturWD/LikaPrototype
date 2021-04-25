import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, ButtonBase, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
        // compact styling
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
            height: 'calc(100% - 50px)',
            right: theme.spacing(6),
            bottom: theme.spacing(2),
        },

        // list styling
        rootList: {
            minHeight: 80,
            display: 'flex',
            alignItems: 'center',
            '&:hover $iconChevron': {
                transform: 'translateX(8px)',
            },
        },
        iconList: {
            width: theme.spacing(12),
            marginRight: theme.spacing(4),
            flex: 'none',
        },
        infoList: {
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'flex-start',
            textAlign: 'left',
        },
        iconChevron: {
            width: theme.spacing(8),
            height: theme.spacing(8),
            color: theme.colors.textSecondary,
            marginLeft: theme.spacing(4),
            flex: 'none',
            transition: 'all 200ms ease-in',
        },
    })
);

type ExerciseCardProps = {
    className?: string;
    variant?: 'compact' | 'list';
    exerciseId: string;
};
const ExerciswCard: React.FunctionComponent<ExerciseCardProps> = (props) => {
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
                className={cn(classes.root, classes.rootList, props.className)}
            >
                <img
                    src={config.icon}
                    alt={config.title}
                    className={classes.iconList}
                ></img>
                <div className={classes.infoList}>
                    <Typography variant="h3">{config.title}</Typography>
                </div>
                <ChevronRightIcon className={classes.iconChevron} />
            </ButtonBase>
        );
    }
};
export default ExerciswCard;
