import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from '../styles';

export default function AddNumber(props)
{
  return (
    <>
    <View style={styles.ViewStyle}>
    <Text style={styles.TextStyle}>Add Number</Text>
    <Button title="+"></Button>
    <TextInput value={props.number}></TextInput>
    </View>
    </>
  )
}