import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText } from '../redux/actionCreators';

class TraditionalComponent extends Component {
  render() {
    return (
      <View
        style={{
          paddingTop: '10%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.changeText('Class')}
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
            <Text>Use Classes!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeText
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(TraditionalComponent);
