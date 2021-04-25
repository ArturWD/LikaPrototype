import { spaUrls } from '../../common/urls';
import exerciseIcon from '../../assets/exercise/quiz.svg';
import { IExerciseConfig } from '../common/types/exerciseConfig';

export const EXERCISE_ID = 'translationWord';

export const exerciseConfig: IExerciseConfig = {
    id: EXERCISE_ID,
    title: 'Translation word',
    subtitle: '',
    description: '',
    icon: exerciseIcon,
    link: `${spaUrls.vocabulary.vocabulary()}/${EXERCISE_ID}`,
};
