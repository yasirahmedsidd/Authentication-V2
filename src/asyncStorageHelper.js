import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  console.log('Loading Storage');
  AsyncStorage.getAllKeys().then(keyArray => {
    AsyncStorage.multiGet(keyArray).then(keyValArray => {
      let myStorage = {};
      for (let keyVal of keyValArray) {
        myStorage[keyVal[0]] = keyVal[1];
      }

      console.log('CURRENT STORAGE: ', myStorage);
    });
  });
};
