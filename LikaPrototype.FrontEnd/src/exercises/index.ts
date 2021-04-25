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

export const exercisesMap = new Map<string, IExerciseConfig>([
    [buildSentencesId, buildSentencesConfig],
    [translationWordId, translationWordConfig],
    [wordTranslationId, wordTranslationConfig],
    [wordPairsId, wordPairsConfig],
    [wordsSprintId, wordsSprintConfig],
    [understandingQuizId, understandingQuizConfig],
]);

export const exercisesIds = {
    buildSentencesId,
    translationWordId,
    wordTranslationId,
    wordPairsId,
    wordsSprintId,
    understandingQuizId,
} as const;
