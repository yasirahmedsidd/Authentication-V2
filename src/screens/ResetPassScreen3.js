/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changePass} from '../redux/actions/authActions';
import {useNavigation} from '@react-navigation/native';

const ResetPassScreen3 = ({auth, changePass}) => {
  const navigation = useNavigation();

  const [newPass, setNewPass] = useState('12345678');
  return (
    <View style={{backgroundColor: '#000', flex: 1, paddingTop: 100}}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 24}}>Reset Password</Text>
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
            value={newPass}
            onChangeText={setNewPass}
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
        <View style={{marginTop: 20}}>
          {auth.resLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <TouchableOpacity
              onPress={() => {
                changePass(newPass, auth.resToken);
                navigation.navigate('LoginOptions');
              }}
              style={{
                width: Dimensions.get('window').width / 3,
                height: 50,
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>Change Password</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch =>
  bindActionCreators({changePass}, dispatch);
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassScreen3);
