import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

import RootLayout from '../components/layouts/RootLayout';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const DictionaryPage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <RootLayout pageTitle="Dictionary">
            <div>Dictionary page content</div>
        </RootLayout>
    );
};
export default DictionaryPage;
