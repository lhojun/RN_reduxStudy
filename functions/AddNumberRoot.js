import React from 'react';
import {Text }from 'react-native';
import AddNumber from './AddNumber';
import styles from '../styles';

export default function AddNumberRoot()
{
  return (
    <>
    <Text style={styles.TextStyle}>Add Number Root</Text>
    <AddNumber/>
    </>
  );
};