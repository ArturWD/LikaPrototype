import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import cn from 'classnames';

import ExerciseCard from '../ExerciseCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {},
        listItem: {},
        listItemWrapper: {
            display: 'block',
            width: '100%',
            '&:not(:last-child)': {
                marginBottom: theme.spacing(4),
            },
        },
    })
);

export type ExerciseCardsListProps = {
    className?: string;
    classes?: {
        list?: string;
        listItem?: string;
        listItemWrapper?: string;
    };
    exercises: string[];
};
const ExerciseCardsList: React.FunctionComponent<ExerciseCardsListProps> = (
    props
) => {
    const classes = useStyles();

    return (
        <ul className={cn(classes.list, props.className, props?.classes?.list)}>
            {props.exercises.map((id) => (
                <li
                    key={id}
                    className={cn(
                        classes.listItemWrapper,
                        props?.classes?.listItemWrapper
                    )}
                >
                    <ExerciseCard
                        variant="list"
                        className={cn(
                            classes.listItem,
                            props?.classes?.listItem
                        )}
                        exerciseId={id}
                    />
                </li>
            ))}
        </ul>
    );
};
export default ExerciseCardsList;
