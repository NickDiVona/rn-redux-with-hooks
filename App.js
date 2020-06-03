import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { dataStore } from './redux/configureStore';
import Explanation from './components/explanationComponent';
import TraditionalComponent from './components/traditionalComponent';
import HooksComponent from './components/hooksComponent';

const App = () => {
  return (
    <Provider store={dataStore}>
      <View style={styles.container}>
        <Explanation />
        <View style={{ flex: 1 }}>
          <TraditionalComponent />
          <HooksComponent />
        </View>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
