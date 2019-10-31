import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 18,
    color: '#fff'
  }
});

Button.propTypes = {
  buttonText: PropTypes.string
};
