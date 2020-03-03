/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginOptionScreen from '../screens/LoginOptionScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResetPassScreen from '../screens/ResetPassScreen';
import ResetPassScreen2 from '../screens/ResetPassScreen2';
import ResetPassScreen3 from '../screens/ResetPassScreen3';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {trylocalSignin} from '../redux/actions/authActions';
import {View, Text} from 'react-native';

const LoginStack = createStackNavigator();
const ResetPassStack = createStackNavigator();

const ResetPassword = () => {
  return (
    <ResetPassStack.Navigator screenOptions={{headerShown: false}}>
      <ResetPassStack.Screen name="ResetPass1" component={ResetPassScreen} />
      <ResetPassStack.Screen name="ResetPass2" component={ResetPassScreen2} />
      <ResetPassStack.Screen name="ResetPass3" component={ResetPassScreen3} />
    </ResetPassStack.Navigator>
  );
};

const LoadingScreen = ({navigation}) => {
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View>
      <Text style={{fontSize: 45}}>Loading</Text>
    </View>
  );
};

const Nav = ({auth, trylocalSignin}) => {
  useEffect(() => {
    trylocalSignin('token');
  }, [trylocalSignin]);

  if (auth.token) {
    return (
      <NavigationContainer>
        <LoginStack.Navigator>
          <LoginStack.Screen name="Profile" component={ProfileScreen} />
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  } else if (auth.asyncLoading) {
    return <></>;
  } else {
    return (
      <NavigationContainer>
        <LoginStack.Navigator>
          <>
            {auth.asyncLoading ? (
              <LoginStack.Screen name="Loading" component={LoadingScreen} />
            ) : (
              <>
                <LoginStack.Screen
                  name="LoginOptions"
                  component={LoginOptionScreen}
                />
                <LoginStack.Screen name="Signin" component={SigninScreen} />
                <LoginStack.Screen name="Signup" component={SignupScreen} />
                <LoginStack.Screen
                  name="Reset"
                  component={ResetPassword}
                  options={{headerShown: false}}
                />
              </>
            )}
          </>
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  }
};

const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch =>
  bindActionCreators({trylocalSignin}, dispatch);
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
