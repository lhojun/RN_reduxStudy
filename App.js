/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddNumberRoot from './functions/AddNumberRoot';
import styles from './styles';

export default function App() 
{
  state = {
    number : "0"
  }
  return (
    <>
    <View style={{flex:1, flexDirection:'column', justifyContent:"center"}}>
      <View style={styles.ViewStyle}>
        <Text style={styles.TextStyle}>Root</Text>
        <AddNumberRoot number = {state.number}></AddNumberRoot>
      </View>
    </View>
    </>
  );
};
