import { spaUrls } from '../../common/urls';
import exerciseIcon from '../../assets/exercise/matchWords.svg';
import { IExerciseConfig } from '../common/types/exerciseConfig';

export const EXERCISE_ID = 'wordPairs';

export const exerciseConfig: IExerciseConfig = {
    id: EXERCISE_ID,
    title: 'Word pairs',
    subtitle: '',
    description: '',
    icon: exerciseIcon,
    link: `${spaUrls.vocabulary.vocabulary()}/${EXERCISE_ID}`,
};
