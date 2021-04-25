import { spaUrls } from '../../common/urls';
import exerciseIcon from '../../assets/exercise/quiz.svg';
import { IExerciseConfig } from '../common/types/exerciseConfig';

export const EXERCISE_ID = 'understandingQuiz';

export const exerciseConfig: IExerciseConfig = {
    id: EXERCISE_ID,
    title: 'Understanding quiz',
    subtitle: '',
    description: '',
    icon: exerciseIcon,
    link: `${spaUrls.reading.reading()}/${EXERCISE_ID}`,
};
