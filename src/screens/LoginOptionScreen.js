/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const LoginOptionScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Text style={{color: '#fff', fontSize: 24, padding: 50}}>
        LoginOptionScreen
      </Text>
      <View style={{position: 'absolute', bottom: 50}}>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width - 100,
            height: 50,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={{color: '#fff'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width - 100,
            height: 50,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#fff'}}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginOptionScreen;
