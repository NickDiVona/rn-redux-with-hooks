import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeText } from '../redux/actionCreators';

//declare component
const HooksComponent = () => {
  //hooks version of mapDispatchToProps
  const dispatch = useDispatch();

  return (
    <View
      style={{
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity
        onPress={() => dispatch(changeText('Hooks'))}
        style={{
          backgroundColor: 'lightblue',
          width: 200,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View>
          <Text>Use Hooks!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HooksComponent;
