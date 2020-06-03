import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeText } from '../redux/actionCreators';

const HookComponent = () => {
  const sample = useSelector((state) => state.sample);
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(changeText('hello'))}>
        <View>
          <Text>{sample}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HookComponent;
