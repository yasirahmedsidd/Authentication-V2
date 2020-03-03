/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {resetPassOne} from '../redux/actions/authActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const ResetPassScreen = ({auth, resetPassOne}) => {
  const [contact, setContact] = useState('03462348352');

  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
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

        <View style={{marginTop: 20}}>
          {auth.resLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <TouchableOpacity
              onPress={() => {
                resetPassOne(contact);
                navigation.navigate('ResetPass2');
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
              <Text style={{color: '#fff'}}>Reset</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch =>
  bindActionCreators({resetPassOne}, dispatch);

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassScreen);