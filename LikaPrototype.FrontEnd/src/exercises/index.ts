import { IExerciseConfig } from './common/types/exerciseConfig';
import { exerciseConfig as buildSentencesConfig } from './buildSentences';

export const exercisesMap = new Map<string, IExerciseConfig>([
    ['buildSentences', buildSentencesConfig],
]);
