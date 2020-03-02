import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const LoadingScreen = ({msg, refresh}) => {
  return (
    <View>
      <Text>{JSON.stringify(msg)}</Text>
      <Button title="Reload" onPress={refresh} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
