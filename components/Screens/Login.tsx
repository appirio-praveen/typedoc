import React, {useState, Fragment} from 'react';
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const Login = ({navigation}: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    if (username.toLowerCase() === 'abcd@gmail.com' && password === '123456') {
      navigation.navigate('HomeScreen', {
        name: 'Amused',
        username,
      });
    } else {
      Alert.alert('Failure', `Login Failed`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={value => setUsername(value)}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      {/* <Button title={'Login'} style={styles.input} onPress={onLogin} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
