import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeText } from '../redux/actionCreators';

//declare component
const HooksComponent = () => {
  //hooks version of mapDispatchToProps
  const dispatch = useDispatch();

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={() => dispatch(changeText('Hooks'))}
        style={styles.buttonStyle}
      >
        <View>
          <Text>Use Hooks!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HooksComponent;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'lightblue',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStyle: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
