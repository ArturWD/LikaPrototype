import React from 'react';
import { createStyles } from '@material-ui/styles';
import { ButtonBase, makeStyles, Theme, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import LoginFormLayout from '../components/layouts/LoginFormLayout';
import { spaUrls } from '../common/urls';
import { useAppContext } from '../store';
import { login, setUserError } from '../store/user';
import Input from '../components/Input';

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
        submitButtonText: {
            color: theme.colors.backgroundMain,
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
interface ILoginForm {
    email: string;
    password: string;
}
// eslint-disable-next-line
// const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginPage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const { state, dispatch } = useAppContext();
    const [showPassword, setPasswordVisibility] = React.useState(false);
    const { handleSubmit, errors } = useForm<ILoginForm>({
        defaultValues: {
            email: '',
            password: '',
        },
    }) as any;
    const onSubmit = (data: ILoginForm) => {
        login(dispatch, data.email, data.password);
    };

    const handleClickShowPassword = () => {
        setPasswordVisibility(!showPassword);
    };
    const clearError = () => {
        dispatch(setUserError(null));
    };

    const formUnderBlock = React.useMemo(() => {
        return (
            <div className={classes.formUnderBlock}>
                <Typography
                    variant="body2"
                    className={classes.secondaryActionText}
                >
                    Don't have an account yet?
                </Typography>
                <Link style={{ textDecoration: 'none' }} to={spaUrls.signup()}>
                    <Typography
                        variant="body2"
                        className={classes.secondaryActionButton}
                    >
                        Sign up
                    </Typography>
                </Link>
            </div>
        );
    }, [
        classes.formUnderBlock,
        classes.secondaryActionButton,
        classes.secondaryActionText,
    ]);
    return (
        <LoginFormLayout
            title="Sign in"
            isLoading={state.user.isLoading}
            loadingText="Checking your data"
            formUnderContent={formUnderBlock}
        >
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email Address"
                    placeholder="name@address.com"
                    type="text"
                    name="email"
                    onFocus={clearError}
                    // ref={register({
                    //     required: 'Email is required',
                    //     pattern: {
                    //         value: emailRegex,
                    //         message: 'Incorrect email',
                    //     },
                    // })}
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                />

                <Input
                    label="Password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onFocus={clearError}
                    // ref={register({
                    //     required: 'Password is required',
                    // })}
                    error={!!errors?.password?.message}
                    helperText={errors?.password?.message}
                    inputHeaderSlot={
                        <Link
                            to={spaUrls.signup()}
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                variant="body2"
                                className={classes.secondaryText}
                            >
                                Forgot password?
                            </Typography>
                        </Link>
                    }
                    inputFieldEndSlot={
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? (
                                <VisibilityOff
                                    classes={{
                                        root: classes.iconButtonStyles,
                                    }}
                                />
                            ) : (
                                <Visibility
                                    classes={{
                                        root: classes.iconButtonStyles,
                                    }}
                                />
                            )}
                        </IconButton>
                    }
                />
                {state.user.error && (
                    <Alert className={classes.errorAlert} severity="error">
                        {state.user.error}
                    </Alert>
                )}

                <ButtonBase type="submit" className={classes.submitButton}>
                    <Typography
                        className={classes.submitButtonText}
                        variant="body1"
                    >
                        Sign in
                    </Typography>
                </ButtonBase>
            </form>
        </LoginFormLayout>
    );
};
export default LoginPage;
