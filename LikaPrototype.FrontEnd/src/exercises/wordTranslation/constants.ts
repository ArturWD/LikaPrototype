import { spaUrls } from '../../common/urls';
import exerciseIcon from '../../assets/exercise/wordTranslation.svg';
import { IExerciseConfig } from '../common/types/exerciseConfig';

export const EXERCISE_ID = 'wordTranslatio';

export const exerciseConfig: IExerciseConfig = {
    id: EXERCISE_ID,
    title: 'Word translation',
    subtitle: '',
    description: '',
    icon: exerciseIcon,
    link: `${spaUrls.vocabulary.vocabulary()}/${EXERCISE_ID}`,
};
