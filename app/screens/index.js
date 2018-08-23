import componentScreens from './componentScreens';
import componentScreenScreens from './componentScreenScreens';
import listScreens from './listScreens';
import styleScreens from './styleScreens';
import animationScreens from './animationScreens';
import realExamples from './realExamples';
import wrapperScreens from './wrapperScreens';
import PlaygroundScreen from './PlaygroundScreen';
import MainScreen from './MainScreen';
import nativeScreens from './nativeComponentScreens';

export default {
  ...componentScreens,
  ...componentScreenScreens,
  ...listScreens,
  ...styleScreens,
  ...animationScreens,
  ...nativeScreens,
  ...realExamples,
  ...wrapperScreens,
  PlaygroundScreen: { screen: PlaygroundScreen },
  MainScreen: { screen: MainScreen }
}