import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class SomeText extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.sample}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  };
};

export default connect(mapStateToProps)(SomeText);
