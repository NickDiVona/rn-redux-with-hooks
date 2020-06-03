import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { dataStore } from './redux/configureStore';
import TraditionalComponent from './components/traditionalComponent';
import HookComponent from './components/hookComponent';

const App = () => {
  return (
    <Provider store={dataStore}>
      <View style={styles.container}>
        <TraditionalComponent />
        <HookComponent />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
