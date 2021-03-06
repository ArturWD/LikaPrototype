import { UserActionTypes, UserActions } from './types';
import { authService } from '../../api';
import { IUser } from '../../types/user';
import { DispatchAction } from '../index';

const setLoading = (isLoading: boolean): UserActionTypes => {
    return {
        type: UserActions.SetLoading,
        isLoading,
    };
};

const setAuthenticated = (isAuthenticated: boolean): UserActionTypes => {
    return {
        type: UserActions.SetAuthenticated,
        isAuthenticated,
    };
};
const setUserData = (user: IUser | null): UserActionTypes => {
    return {
        type: UserActions.SetUserData,
        user,
    };
};
export const setUserError = (error: string | null): UserActionTypes => {
    return {
        type: UserActions.SetError,
        error,
    };
};

export const attemptAutomaticLogin = async (
    dispatch: React.Dispatch<DispatchAction>,
    errorCallback?: Function,
    successCallback?: Function
) => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            dispatch(setLoading(true));
            const user = await authService.getUserData();
            if (user instanceof Error) throw user;
            dispatch(setUserData(user));
            dispatch(setAuthenticated(true));
            successCallback && successCallback();
        } catch (e) {
            console.log(e);
            dispatch(setAuthenticated(false));
            dispatch(setUserError(e.message));
            errorCallback && errorCallback();
        } finally {
            dispatch(setLoading(false));
        }
    } else {
        errorCallback && errorCallback();
    }
};

export const login = async (
    dispatch: React.Dispatch<DispatchAction>,
    email: string,
    password: string
) => {
    try {
        dispatch(setLoading(true));
        const user = await authService.loginUser(email, password);
        if (user instanceof Error) throw user;
        dispatch(setUserData(user));
        dispatch(setAuthenticated(true));
    } catch (e) {
        console.log(e);
        dispatch(setUserError(e.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const signUp = async (
    dispatch: React.Dispatch<DispatchAction>,
    email: string,
    password: string
) => {
    try {
        dispatch(setLoading(true));
        const user = await authService.signUpUser(email, password);
        dispatch(setUserData(user));
        dispatch(setAuthenticated(true));
    } catch (e) {
        console.log(e);
        dispatch(setUserError(e.message));
    } finally {
        dispatch(setLoading(false));
    }
};
export const getUserData = async (dispatch: React.Dispatch<DispatchAction>) => {
    try {
        dispatch(setLoading(true));
        const user = await authService.getUserData();
        if (user instanceof Error) throw user;
        dispatch(setUserData(user));
    } catch (e) {
        console.log(e);
        dispatch(setAuthenticated(false));
        dispatch(setUserError(e.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const logout = async (
    dispatch: React.Dispatch<DispatchAction>,
    isInvalidToken?: boolean
) => {
    if (isInvalidToken) {
        dispatch(setUserError('Your session has expired. Log in again/'));
    }
    authService.logout();
    dispatch(setAuthenticated(false));
};
