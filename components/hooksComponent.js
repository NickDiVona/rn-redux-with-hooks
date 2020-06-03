import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeText } from '../redux/actionCreators';

//declare component
const HooksComponent = () => {
  //hooks version of mapStateToProps and connect
  const sample = useSelector((state) => state.sample);
  //hooks version of mapDispatchToProps
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ paddingBottom: 20 }}>Hooks</Text>
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
          <Text>{sample}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HooksComponent;
