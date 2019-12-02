import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
  username: string;
}

export class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params
        ? this.props.navigation.state.params.username || ''
        : '',
    };
  }

  render() {
    const {username} = this.state;
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>Hello {username}</Text>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});
