import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { useAppContext } from './store';
import { spaUrls } from './common/urls';
import { attemptAutomaticLogin } from './store/user';

import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const DictionaryPage = React.lazy(() => import('./pages/DictionaryPage'));
const ExploreContentPage = React.lazy(
    () => import('./pages/ExploreContentPage')
);
const GrammarTrainingPage = React.lazy(
    () => import('./pages/GrammarTrainingPage')
);
const HelpPage = React.lazy(() => import('./pages/HelpPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const ProgressPage = React.lazy(() => import('./pages/ProgressPage'));
const VocabularyTrainingPage = React.lazy(
    () => import('./pages/VocabularyTrainingPage')
);

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
        history.push(spaUrls.loading());
        attemptAutomaticLogin(dispatch, errorCallback, successCallback);
    }, [dispatch, history]);

    if (!state.user.isAuthenticated) {
        return (
            <Switch>
                <Route path={spaUrls.login()} component={LoginPage} />
                <Route path={spaUrls.signup()} component={SignupPage} />
                <Route path={spaUrls.loading()} component={LoadingPage} />
                <Redirect to={spaUrls.login()} />
            </Switch>
        );
    } else {
        return (
            <React.Suspense fallback={<LoadingPage />}>
                <Switch>
                    <Route exact path={spaUrls.home()} component={HomePage} />
                    <Route path={spaUrls.loading()} component={LoadingPage} />
                    <Route
                        exact
                        path={spaUrls.dictionary.dictionary()}
                        component={DictionaryPage}
                    />
                    <Route
                        exact
                        path={spaUrls.vocabulary.vocabulary()}
                        component={VocabularyTrainingPage}
                    />
                    <Route
                        exact
                        path={spaUrls.writing.writing()}
                        component={GrammarTrainingPage}
                    />
                    <Route
                        exact
                        path={spaUrls.explore.explore()}
                        component={ExploreContentPage}
                    />
                    <Route
                        exact
                        path={spaUrls.progress.progress()}
                        component={ProgressPage}
                    />
                    <Route
                        exact
                        path={spaUrls.profile.profile()}
                        component={ProfilePage}
                    />
                    <Route exact path={spaUrls.help()} component={HelpPage} />
                    <Redirect to={spaUrls.home()} />
                </Switch>
            </React.Suspense>
        );
    }
};

export default App;
