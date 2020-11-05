import React from 'react';
import {Text, View }from 'react-native';
import AddNumber from './AddNumber';
import styles from '../styles';

export default function AddNumberRoot(props)
{
  return (
    <>
    <View style={styles.ViewStyle}>
    <Text style={styles.TextStyle}>Add Number Root</Text>
    <AddNumber number={props.number}/>
    </View>
    </>
  );
};