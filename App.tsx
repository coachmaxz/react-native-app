import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello World
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    paddingTop: 100,
    fontSize: 20,
    color: 'steelblue',
  }
})

export default App