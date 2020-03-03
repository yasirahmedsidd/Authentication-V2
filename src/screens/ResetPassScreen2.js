/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {verifyCode} from '../redux/actions/authActions';
import reactotron from 'reactotron-react-native';

const ResetPassScreen2 = ({resResponse, resToken, resLoading, verifyCode}) => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#000', flex: 1, paddingTop: 100}}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 24}}>
          Reset Password Screen 2
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 24}}>Enter Code</Text>
      </View>
      <Text
        style={{fontSize: 24, alignSelf: 'center', padding: 20, color: '#FFF'}}>
        1 - 1 - 1 - 1
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginTop: 20}}>
          {resLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <TouchableOpacity
              onPress={() => {
                try {
                  verifyCode('1111', resToken);
                  navigation.navigate('ResetPass3');
                } catch (error) {
                  console.log(error);
                }
              }}
              style={{
                width: Dimensions.get('window').width / 4,
                height: 50,
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>Verify Code</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={{alignSelf: 'center', margin: 40}}>
          Code from sms : {JSON.stringify(1111)}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  resResponse: state.auth.resResponse,
  resToken: state.auth.resToken,
  resLoading: state.auth.resLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({verifyCode}, dispatch);

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassScreen2);
