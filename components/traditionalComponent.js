import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText } from '../redux/actionCreators';

class TraditionalComponent extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          onPress={() => this.props.changeText('Class')}
          style={styles.buttonStyle}
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
    paddingTop: '10%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
