import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UserApi from '../apis/UserApi';
import LoadingScreen from './LoadingScreen';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutUser, removeTokenFromStorage} from '../redux/actions/authActions';
import AsyncStorage from '@react-native-community/async-storage';
import reactotron from 'reactotron-react-native';
const ProfileScreen = props => {
  const navigation = useNavigation();
  const [farms, setFarms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenAS, setTokenAS] = useState(null);
  useEffect(() => {
    fetchFarms();
    return () => {
      setFarms([]);
    };
  }, []);

  const fetchFarms = async () => {
    setIsLoading(true);
    UserApi.get('/farmhouses')
      .then(res => {
        setFarms(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
    try {
      const val = await AsyncStorage.getItem('item');
      setTokenAS(val);
    } catch (error) {
      reactotron.log(error);
    }
  };

  const reload = async () => {
    setFarms([]);
    setError(null);
    await fetchFarms();
  };
  if (!isLoading && !error) {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <Button
          title="Log out"
          onPress={() => {
            props.logoutUser();
            props.removeTokenFromStorage('token');
          }}
        />
        <Button title="Reload" onPress={reload} />
        <View>
          <Text>{JSON.stringify(farms)}</Text>
          <Text>{JSON.stringify(error)}</Text>
          <Text>{JSON.stringify(isLoading)}</Text>
          <Text>{JSON.stringify(tokenAS)}</Text>
        </View>
      </View>
    );
  } else {
    return <LoadingScreen error={error} />;
  }
};

const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch =>
  bindActionCreators({logoutUser, removeTokenFromStorage}, dispatch);
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({});
