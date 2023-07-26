import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#EEEEEE" />
      <View style={styles.container}>
        <Text> Hello World </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#EEEEEE',
  }
});

export default App;