import React from 'react';
import { StyleSheet, View } from 'react-native';

import ViewLists from './src/lista/containers/lista';

export default function App() {
  return (
    <View style={styles.container}>
      {/* creamos el container de la lista */}
        <ViewLists></ViewLists>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
