import React from 'react';
import {Text, Button, TextInput} from 'react-native';
import styles from '../styles';

export default function AddNumber()
{
  return (
    <>
    <Text style={styles.TextStyle}>Add Number</Text>
    <Button title="+"></Button>
    <TextInput value="0"></TextInput>
    </>
  )
}