import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text , View , Image, TextInput, Button } from 'react-native';
import PersonalInformation from './components/PersonalInformation';
import Bio from './components/Bio';
export default function App() {
  return (
    <View style={styles.container}>
      <PersonalInformation />
      <Bio />
      <StatusBar style="auto" />
      <TextInput placeholder='email' />
      <Button title="press me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
