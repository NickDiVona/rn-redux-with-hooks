import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { dataStore } from './redux/configureStore';
import SomeText from './components/someText';
import SomeHookyStuff from './components/someHookyStuff';

export default function App() {
  return (
    <Provider store={dataStore}>
      <View style={styles.container}>
        <SomeText />
        <SomeHookyStuff />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
