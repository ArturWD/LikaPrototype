import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { useAppContext } from './store';
import { spaUrls } from './common/urls';
import { attemptAutomaticLogin } from './store/user';
import RootLayout from './components/layouts/RootLayout';
import Loader from './components/Loader';

import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const DictionaryPage = React.lazy(() => import('./modules/dictionary/router'));
const ExploreContentPage = React.lazy(
    () => import('./modules/exploreContent/router')
);
const GrammarTrainingPage = React.lazy(
    () => import('./modules/writing/router')
);
const HelpPage = React.lazy(() => import('./pages/HelpPage'));
const ProfilePage = React.lazy(() => import('./modules/profile/router'));
const ProgressPage = React.lazy(() => import('./modules/progress/router'));
const VocabularyTrainingPage = React.lazy(
    () => import('./modules/vocabulary/router')
);
const ReadingTrainingPage = React.lazy(
    () => import('./modules/reading/router')
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
            <RootLayout>
                <React.Suspense fallback={<Loader height="600px" />}>
                    <Switch>
                        <Route
                            exact
                            path={spaUrls.home()}
                            component={HomePage}
                        />
                        <Route
                            path={spaUrls.loading()}
                            component={LoadingPage}
                        />
                        <Route
                            path={spaUrls.dictionary.dictionary()}
                            component={DictionaryPage}
                        />
                        <Route
                            path={spaUrls.vocabulary.vocabulary()}
                            component={VocabularyTrainingPage}
                        />
                        <Route
                            path={spaUrls.writing.writing()}
                            component={GrammarTrainingPage}
                        />
                        <Route
                            path={spaUrls.reading.reading()}
                            component={ReadingTrainingPage}
                        />
                        <Route
                            path={spaUrls.explore.explore()}
                            component={ExploreContentPage}
                        />
                        <Route
                            path={spaUrls.progress.progress()}
                            component={ProgressPage}
                        />
                        <Route
                            path={spaUrls.profile.profile()}
                            component={ProfilePage}
                        />
                        <Route path={spaUrls.help()} component={HelpPage} />
                        <Redirect to={spaUrls.home()} />
                    </Switch>
                </React.Suspense>
            </RootLayout>
        );
    }
};

export default App;
