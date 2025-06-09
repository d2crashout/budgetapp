import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GreetingProps } from '../props/Greeting';

export const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  font: {
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text style={[styles.font, {color: '#FFFFFF'}]}>Hi, {props.name}!</Text>
    </View>
  );
};

export default Greeting;