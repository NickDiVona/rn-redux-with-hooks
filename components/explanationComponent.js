// SYSTEM IMPORTS
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Explanation = () => {
  //hooks version of mapStateToProps and connect
  const featuredText = useSelector((state) => state.featuredText);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.explanationStyle}>
        Pressing either button will update the large text.
      </Text>
      <Text style={styles.explanationStyle}>
        Both buttons trigger the store to update, which is at application level.
      </Text>

      <Text style={styles.titleTextStyle}>{featuredText}</Text>
    </View>
  );
};

export default Explanation;

const styles = StyleSheet.create({
  explanationStyle: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
  titleTextStyle: { paddingTop: 50, fontSize: 48 },
  containerStyle: {
    flex: 2,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
