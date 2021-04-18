import * as React from 'react';
import { combineReducers } from '../utils/combineReducers';
import { userInitialState, userReducer } from './user';
import { UserActionTypes, IUserState } from './user/types';

export type DispatchAction = UserActionTypes;
export interface IState {
    user: IUserState;
}
const combinedReducers = {
    user: [userReducer, userInitialState],
};
const [rootReducer, initialState] = combineReducers<IState, DispatchAction>(
    combinedReducers
);

interface IContextState {
    state: IState;
    dispatch: React.Dispatch<DispatchAction>;
}
const contextInitialState = {
    state: initialState,
    dispatch: () => {},
};
const ApplicationContext = React.createContext<IContextState>(
    contextInitialState
);

export const AppProvider: React.FunctionComponent = (props) => {
    const [state, dispatch] = React.useReducer(rootReducer, initialState);

    const сontext = React.useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch]
    );

    return (
        <ApplicationContext.Provider value={сontext}>
            {props.children}
        </ApplicationContext.Provider>
    );
};

export function useAppContext() {
    const context = React.useContext(ApplicationContext);
    if (context === undefined) {
        throw new Error(`useAppContext must be used within a AppProvider`);
    }
    return context;
}
