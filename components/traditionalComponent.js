import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText } from '../redux/actionCreators';

class TraditionalComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ paddingBottom: 20 }}>Class</Text>
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
            <Text>{this.props.sample}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeText
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraditionalComponent);
