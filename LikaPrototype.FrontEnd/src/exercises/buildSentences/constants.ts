import { spaUrls } from '../../common/urls';
import exerciseIcon from '../../assets/exercise/blocks.svg';
import { IExerciseConfig } from '../common/types/exerciseConfig';

export const EXERCISE_ID = 'buildSentences';

export const exerciseConfig: IExerciseConfig = {
    id: EXERCISE_ID,
    title: 'Sentence builder',
    subtitle: '',
    description: '',
    icon: exerciseIcon,
    link: `${spaUrls.writing.writing()}/${EXERCISE_ID}`,
};
