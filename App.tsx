import React from 'react'

import { View } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications'

import AlertScreen from './alert'

function App(): React.JSX.Element {
  return (
    <View>
      {/* placement = ตำแหน่งแสดง popup (top, bottom, center) */}
      <ToastProvider placement="top">
        <AlertScreen />
      </ToastProvider>
    </View>
  )
}
export default App