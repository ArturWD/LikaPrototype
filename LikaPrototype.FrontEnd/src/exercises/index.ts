import { IExerciseConfig } from './common/types/exerciseConfig';

import {
    exerciseConfig as buildSentencesConfig,
    EXERCISE_ID as buildSentencesId,
} from './buildSentences';
import {
    exerciseConfig as translationWordConfig,
    EXERCISE_ID as translationWordId,
} from './translationWord';
import {
    exerciseConfig as wordTranslationConfig,
    EXERCISE_ID as wordTranslationId,
} from './wordTranslation';
import {
    exerciseConfig as wordPairsConfig,
    EXERCISE_ID as wordPairsId,
} from './wordPairs';
import {
    exerciseConfig as wordsSprintConfig,
    EXERCISE_ID as wordsSprintId,
} from './wordsSprint';
import {
    exerciseConfig as understandingQuizConfig,
    EXERCISE_ID as understandingQuizId,
} from './understandingQuiz';

import TranslationWordPage from './translationWord/ExercisePage';
import WordTranslationPage from './wordTranslation/ExercisePage';
import WordsSprint from './wordsSprint/ExercisePage';
import UnderstandingQuiz from './understandingQuiz/ExercisePage';
import WordPairsPage from './wordPairs/ExercisePage';
import BuildSentencesPage from './buildSentences/ExercisePage';

export const exercisesMap = new Map<string, IExerciseConfig>([
    [buildSentencesId, buildSentencesConfig],
    [translationWordId, translationWordConfig],
    [wordTranslationId, wordTranslationConfig],
    [wordPairsId, wordPairsConfig],
    [wordsSprintId, wordsSprintConfig],
    [understandingQuizId, understandingQuizConfig],
]);

export const exercisePagesMap = new Map<string, React.FunctionComponent>([
    [buildSentencesId, BuildSentencesPage],
    [translationWordId, TranslationWordPage],
    [wordTranslationId, WordTranslationPage],
    [wordPairsId, WordPairsPage],
    [wordsSprintId, WordsSprint],
    [understandingQuizId, UnderstandingQuiz],
]);

export const exercisesIds = {
    buildSentencesId,
    translationWordId,
    wordTranslationId,
    wordPairsId,
    wordsSprintId,
    understandingQuizId,
} as const;
