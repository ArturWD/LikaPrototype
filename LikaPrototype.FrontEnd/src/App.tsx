import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { useAppContext } from './store';
import { spaUrls } from './common/urls';
import { attemptAutomaticLogin } from './store/user';
import RootLayout from './components/layouts/RootLayout';

import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';

const HomePage = React.lazy(() => import('./pages/HomePage'));

const originalLocation = {
    pathname: window.location.pathname,
    origin: window.location.origin,
    href: window.location.href,
} as const;

const App: React.FunctionComponent = (props) => {
    const { state, dispatch } = useAppContext();
    const history = useHistory();
    useEffect(() => {
        const errorCallback = () => history.push(spaUrls.login());
        const successCallback = () => history.push(originalLocation.pathname);
        history.push(spaUrls.progress());
        attemptAutomaticLogin(dispatch, errorCallback, successCallback);
    }, [dispatch, history]);

    if (!state.user.isAuthenticated) {
        return (
            <Switch>
                <Route exact path={spaUrls.login()} component={LoginPage} />
                <Route exact path={spaUrls.signup()} component={SignupPage} />
                <Route path={spaUrls.progress()} component={LoadingPage} />
                <Redirect to={spaUrls.progress()} />
            </Switch>
        );
    } else {
        return (
            <React.Suspense fallback={<LoadingPage />}>
                <Switch>
                    <Route exact path={spaUrls.home()} component={HomePage} />
                    <Route path={spaUrls.progress()} component={LoadingPage} />
                    <Redirect to={spaUrls.home()} />
                </Switch>
            </React.Suspense>
        );
    }
};

export default App;
