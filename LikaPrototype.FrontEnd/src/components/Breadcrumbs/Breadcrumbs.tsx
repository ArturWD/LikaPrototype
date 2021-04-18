import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import cn from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
    })
);
export interface IBreadcrumb {
    text: string;
    link?: string;
}

type BreadcrumbsProps = {
    className?: string;
    breadcrumbs: IBreadcrumb[];
};
const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = (props) => {
    const classes = useStyles();
    return <div>Breadcrumbs</div>;
};
export default Breadcrumbs;
