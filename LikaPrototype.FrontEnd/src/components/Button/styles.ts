import { Theme, createStyles } from '@material-ui/core';

export interface IButtonStylesProps {
    size: 'small' | 'medium' | 'large';
    fill: 'none' | 'fill';
    outlined: boolean;
    disabled: boolean;
    forceActiveState: boolean;
    hasChildren: boolean;
}
export const styles = (theme: Theme) =>
    createStyles<any, IButtonStylesProps>({
        root: {
            display: 'flex',
            alignItems: 'center',
            padding: ({ size, hasChildren }) => {
                switch (size) {
                    case 'large':
                        return hasChildren
                            ? theme.spacing(3, 4)
                            : theme.spacing(3);
                    case 'small':
                        return hasChildren
                            ? theme.spacing(1, 2)
                            : theme.spacing(1);
                    case 'medium':
                    default:
                        return theme.spacing(2);
                }
            },
            borderRadius: ({ hasChildren }) =>
                hasChildren ? theme.spacing(4) : '50%',
            backgroundColor: ({ forceActiveState }) =>
                forceActiveState
                    ? theme.colors.backgroundMain
                    : theme.colors.backgroundSecondary,
            transition: 'all 300ms ease-in-out',
            '&:hover': {
                backgroundColor: theme.colors.backgroundSecondary,
            },
            '& > *': {
                flex: '1 1 auto',
            },
        },
        buttonText: {
            fontSize: ({ size }) => {
                switch (size) {
                    case 'large':
                        return theme.typography.body1.fontSize;
                    case 'small':
                        return theme.typography.body1.fontSize;
                    case 'medium':
                    default:
                        return theme.typography.caption.fontSize;
                }
            },
            color: ({ disabled }) =>
                disabled ? theme.colors.textTertiary : 'initial',
        },
        iconWrapper: {
            flex: 'none',
            marginRight: ({ hasChildren }) =>
                hasChildren ? theme.spacing(2) : 0,
        },
        icon: {
            width: ({ size }) => {
                switch (size) {
                    case 'large':
                        return theme.spacing(8);
                    case 'small':
                        return theme.spacing(5);
                    case 'medium':
                    default:
                        return theme.spacing(6);
                }
            },
            height: 'auto',
            color: theme.colors.textMain,
        },
    });

export default styles;
