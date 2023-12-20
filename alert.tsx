import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

import { useToast } from 'react-native-toast-notifications'

const { width, height } = Dimensions.get('window')

function AlertScreen(): React.JSX.Element {

  const alert = useToast()

  const onShowAlert = (position: any = 'top') => {
    alert.show('Message Alert', { 
      type: 'normal', // normal | success | warning | danger | custom,
      placement: position, // top | bottom | center
      duration: 4000, // 4 seconds
      animationType: 'slide-in', // slide-in | zoom-in
    })
  }

  const onUpdateAlert = (position: any = 'center') => {
    let id = alert.show('Loading...', {
      type: 'normal', // normal | success | warning | danger | custom
      placement: position, // top | bottom | center
      duration: 4000, // 4 seconds
      animationType: 'slide-in', // slide-in | zoom-in
    })
    setTimeout(() => {
      alert.update(id, 'Loading completed', {
        type: 'normal', // normal | success | warning | danger | custom
        placement: position, // top | bottom | center
        duration: 4000, // 4 seconds
        animationType: 'slide-in', // slide-in | zoom-in
      })
    }, 2000) // 2 seconds
  }

  return (
    <SafeAreaView style={styles.container}>
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
    height: height,
    alignItems: 'center',
    padding: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    margin: 2,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#0d6efd',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  }
})

export default AlertScreen