import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginOptionScreen from '../screens/LoginOptionScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResetPassScreen from '../screens/ResetPassScreen';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {trylocalSignin} from '../redux/actions/authActions';
import {View, Text} from 'react-native';

const LoginStack = createStackNavigator();
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
        <LoginStack.Navigator initialRouteName="ResetPass">
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
                  name="ResetPass"
                  component={ResetPassScreen}
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav);

{
  /* <NavigationContainer>
<LoginStack.Navigator>
  {auth.token ? (
    <LoginStack.Screen name="Profile" component={ProfileScreen} />
  ) : (
    <>
      {auth.asyncLoading && !auth.token ? (
        <LoginStack.Screen name="Loading" component={LoadingScreen} />
      ) : (
        <>
          <LoginStack.Screen
            name="LoginOptions"
            component={LoginOptionScreen}
          />
          <LoginStack.Screen name="Signin" component={SigninScreen} />
          <LoginStack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </>
  )}
</LoginStack.Navigator>
</NavigationContainer> */
}
