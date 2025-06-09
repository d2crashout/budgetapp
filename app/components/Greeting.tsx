import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { GreetingProps } from '@/props/Greeting';

export const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

export default Greeting;