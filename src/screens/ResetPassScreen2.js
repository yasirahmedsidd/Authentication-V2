/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {verifyCode} from '../redux/actions/authActions';
import reactotron from 'reactotron-react-native';

const ResetPassScreen2 = ({resResponse, resToken, resLoading, verifyCode}) => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
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

      <View style={{alignItems: 'center'}}>
        <OTPInputView
          style={{width: '80%', height: 200}}
          pinCount={4}
          code={code}
          onCodeChanged={setCode}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      {/* <Text
        style={{fontSize: 24, alignSelf: 'center', padding: 20, color: '#FFF'}}>
        1 - 1 - 1 - 1
      </Text> */}
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
                  verifyCode(code, resToken);
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

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
const mapStateToProps = state => ({
  resResponse: state.auth.resResponse,
  resToken: state.auth.resToken,
  resLoading: state.auth.resLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({verifyCode}, dispatch);

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassScreen2);
