import React, { ReactElement, ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';
import { ButtonBase, ButtonBaseProps, Typography } from '@material-ui/core';
import cn from 'classnames';

import styles from './styles';

const useStyles = makeStyles(styles);

export interface IBreadcrumb {
    text: string;
    link?: string;
}

interface IButtonProps extends ButtonBaseProps {
    className?: string;
    icon?: ReactElement;
    size?: 'small' | 'medium' | 'large';
    fill?: 'none' | 'fill';
    outlined?: boolean;
    forceActiveState?: boolean;
    classes?: {
        root?: string;
        icon?: string;
        iconWrapper?: string;
        text?: string;
    };
    children?: ReactNode | string;
}
const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const {
        size = 'medium',
        fill = 'fill',
        outlined = false,
        forceActiveState = false,
        classes: propsClasses,
        ...otherProps
    } = props;
    const classes = useStyles({
        size,
        fill,
        outlined,
        forceActiveState,
        disabled: props.disabled,
        hasChildren: !!props.children,
    });

    const children = props.children;
    if (typeof props.children === 'string') {
        return (
            <Typography
                className={cn(classes.buttonText, propsClasses?.text)}
                variant="body2"
            >
                {props.children}
            </Typography>
        );
    }
    return (
        <ButtonBase
            className={cn(classes.root, props.className, propsClasses?.root)}
            {...otherProps}
        >
            {props.icon && (
                <div
                    className={cn(
                        classes.iconWrapper,
                        propsClasses?.iconWrapper
                    )}
                >
                    {React.cloneElement(props.icon, {
                        className: cn(classes.icon, propsClasses?.icon),
                    })}
                </div>
            )}
            {children}
        </ButtonBase>
    );
};
export default Button;
