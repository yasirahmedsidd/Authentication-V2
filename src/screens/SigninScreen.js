/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {loginUser} from '../redux/actions/authActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const SigninScreen = props => {
  const [contact, setContact] = useState('11111111111');
  const [pass, setPass] = useState('12345678');

  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View style={{backgroundColor: '#000', flex: 1, paddingTop: 100}}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 24}}>
          Login Into your Account
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 14, padding: 20}}>
            Username
          </Text>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            value={contact}
            onChangeText={setContact}
            style={{
              width: Dimensions.get('window').width - 100,
              height: 50,
              backgroundColor: '#000',
              borderWidth: 1,
              borderColor: '#fff',
              marginBottom: 10,
              borderRadius: 25,
              color: '#fff',
              paddingHorizontal: 15,
              fontSize: 18,
            }}
          />
        </View>
        <View>
          <Text style={{color: '#fff', fontSize: 14, padding: 20}}>
            Password
          </Text>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            value={pass}
            onChangeText={setPass}
            secureTextEntry
            style={{
              width: Dimensions.get('window').width - 100,
              height: 50,
              backgroundColor: '#000',
              borderWidth: 1,
              borderColor: '#fff',
              marginBottom: 10,
              borderRadius: 25,
              color: '#fff',
              paddingHorizontal: 15,
              fontSize: 18,
            }}
          />
        </View>
        <Text style={{color: '#fff', fontSize: 14, padding: 20}}>
          {props.auth.error}
        </Text>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('window').width / 4,
              height: 50,
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            // onPress={() => navigation.navigate('Profile')}>
            onPress={() => props.loginUser(contact, pass)}>
            <Text style={{color: '#fff'}}>{props.auth.isLoading?"Loading":"Log in"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch =>
  bindActionCreators({loginUser}, dispatch);
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
