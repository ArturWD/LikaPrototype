import { spaUrls } from '../../common/urls';
import exerciseIcon from '../../assets/exercise/sprint.svg';
import { IExerciseConfig } from '../common/types/exerciseConfig';

export const EXERCISE_ID = 'wordsSprint';

export const exerciseConfig: IExerciseConfig = {
    id: EXERCISE_ID,
    title: 'Words sprint',
    subtitle: '',
    description: '',
    icon: exerciseIcon,
    link: `${spaUrls.vocabulary.vocabulary()}/${EXERCISE_ID}`,
};
