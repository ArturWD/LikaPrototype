import React from 'react';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme } from '@material-ui/core';

import RootLayout from '../components/layouts/RootLayout';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const VocabularyTraining: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <RootLayout pageTitle="Vocabulary training">
            <div>VocabularyTraining page content</div>
        </RootLayout>
    );
};
export default VocabularyTraining;
