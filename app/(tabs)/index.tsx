import { Image, StyleSheet, Text } from 'react-native';

import {
  Button,
  ButtonText
} from "@/components/ui/button"
import { ThemedView } from '@/components/ThemedView';

import React from 'react';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.Container}>
      
    <Text className='bg-slate-950'>asd</Text>


  </ThemedView>
  );
}

const styles = StyleSheet.create({
 Container : {
  flex : 1,
  justifyContent: 'center',
  alignItems : 'center'
 }
});
