import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '@/components/Styles';

// Define the type for state
type State = {
  count: number;
};

class ClickCounter extends Component<{}, State> {
  state: State = {
    count: 0,
  };

  onPress = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.font}>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.font}>You clicked {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}

export default ClickCounter;
