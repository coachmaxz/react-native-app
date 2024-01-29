import React from 'react'
import { SafeAreaView, StyleSheet, useColorScheme, View, Text, TouchableOpacity, Dimensions } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useToast } from 'react-native-toast-notifications'

function AlertScreen(): React.JSX.Element {

  const alert = useToast()
  const isDarkMode = useColorScheme() === 'dark'

  const onShowAlert = (position: any = 'top') => {
    alert.show('Message Alert', { 
      type: 'success', // normal | success | warning | danger | custom
      placement: position, // top | bottom | center
      duration: 4000, // 4 seconds
      animationType: 'slide-in', // slide-in | zoom-in
    })
  }

  const onUpdateAlert = (position: any = 'center') => {
    let id = alert.show('Loading...', {
      type: 'success', // normal | success | warning | danger
      placement: position, // top | bottom | center
      duration: 4000, // 4 seconds
      animationType: 'slide-in', // slide-in | zoom-in
    })
    setTimeout(() => {
      alert.update(id, 'Loading completed', {
        type: 'normal', // normal | success | warning | danger
        placement: position, // top | bottom | center
        duration: 4000, // 4 seconds
        animationType: 'slide-in', // slide-in | zoom-in
      })
    }, 2000) // 2 seconds
  }

  const onClick = () => {
    alert.show('Message Alert', { 
      type: 'normal', // normal | success | warning | danger
      placement: 'top', // top | bottom | center
      duration: 4000, // 4 seconds
      animationType: 'slide-in', // slide-in | zoom-in
    })
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={{ ...styles.container, ...backgroundStyle }}>
      <Text>Popup Alert</Text>
      <TouchableOpacity onPress={onClick} style={styles.btn}>
        <Text style={styles.btnText}>
          Show
        </Text>
      </TouchableOpacity>
      <Text>Popup Alert</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onShowAlert('top')} style={styles.btn}>
          <Text style={styles.btnText}>
            Top
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShowAlert('center')} style={styles.btn}>
          <Text style={styles.btnText}>
            Center
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShowAlert('bottom')} style={styles.btn}>
          <Text style={styles.btnText}>
            Bottom
          </Text>
        </TouchableOpacity>
      </View>
      <Text>Update Alert</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onUpdateAlert('top')} style={styles.btn}>
          <Text style={styles.btnText}>
            Show
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    padding: 20,
  },
  btn: {
    margin: 2,
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#0d6efd',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
})

export default AlertScreen