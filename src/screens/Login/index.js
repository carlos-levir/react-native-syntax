import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Button from '../../components/Button';

export default function Login() {
  return (
    <View>
      <TextInput style={styles.inputMail} placeholder="Email" />
      <TextInput style={styles.inputMail} placeholder="Senha" />
      <Button buttonText="Entrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputMail: {
    borderWidth: 1,
    width: 200,
    height: 40,
    marginBottom: 10,
    borderRadius: 10
  }
});
