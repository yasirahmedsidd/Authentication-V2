/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {createUser} from '../redux/actions/authActions';
import {bindActionCreators} from 'redux';

const SignupScreen = ({auth, createUser}) => {
  const [contact, setContact] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    setContact(Math.floor(Math.random(0.4) * 100000000000).toString());
    setPass('12345678');
  }, []);
  const navigation = useNavigation();

  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View style={{backgroundColor: '#000', flex: 1, paddingTop: 100}}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 24}}>Create an Account</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 14, padding: 20}}>
            Contact
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
          <Text style={{color: '#fff', fontSize: 14, padding: 20}}>
            {auth.error}
          </Text>
        </View>
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
            onPress={() => createUser(contact, pass)}>
            <Text style={{color: '#fff'}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({createUser}, dispatch);
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
