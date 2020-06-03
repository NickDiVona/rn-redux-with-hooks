import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Explanation = () => {
  //hooks version of mapStateToProps and connect
  const featuredText = useSelector((state) => state.featuredText);

  return (
    <View
      style={{
        flex: 2,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={styles.textStyle}>
        Pressing either button will update the large text.
      </Text>
      <Text style={styles.textStyle}>
        Both buttons trigger the store to update, which is at application level.
      </Text>
      <Text style={{ paddingTop: 50, fontSize: 48 }}>{featuredText}</Text>
    </View>
  );
};

export default Explanation;

const styles = StyleSheet.create({
  textStyle: { fontSize: 20, textAlign: 'center', marginBottom: 20 }
});
