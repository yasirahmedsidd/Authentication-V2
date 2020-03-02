import Reactotron, {networking} from 'reactotron-react-native';

import {reactotronRedux} from 'reactotron-redux';

import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure({name: 'Authentication'})
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .use(networking())
  .useReactNative()
  .connect();

export default reactotron;
