import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme, View, Text, Dimensions } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  const fontStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  }
  return (
    <SafeAreaView style={[ styles.container, backgroundStyle ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.wrapper}>
          <Text style={[ styles.helloWorld, fontStyle ]}>
            Hello World !!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  helloWorld: {
    marginTop: 90,
    paddingVertical: 410,
    fontSize: 20,
    fontWeight: '400',
  },
})

export default App