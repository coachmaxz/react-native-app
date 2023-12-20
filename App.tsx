import React from 'react'
import { View, Text, Dimensions } from 'react-native'

import { ToastProvider } from 'react-native-toast-notifications'
import AlertScreen from './alert'

/*
const { width, height } = Dimensions.get('window')
const alertCustomStyles: any = {
  'normal': { flex: 1, paddingVertical: 5, paddingHorizontal: 10, width: width * 0.90, borderRadius: 3, backgroundColor: '#212529' },
  'success': { flex: 1, paddingVertical: 5, paddingHorizontal: 10, width: width * 0.90, borderRadius: 3, backgroundColor: '#198754' },
  'danger': { flex: 1, paddingVertical: 5, paddingHorizontal: 10, width: width * 0.90, borderRadius: 3, backgroundColor: '#dc3545' },
  'warning': { flex: 1, paddingVertical: 5, paddingHorizontal: 10, width: width * 0.90, borderRadius: 3, backgroundColor: '#ffc107' },
  'custom': {},
}
*/

function App(): React.JSX.Element {
  return (
    <>
      <ToastProvider 
        placement="bottom"
        /*
        renderToast={(toastOptions: any) => {
          console.log(toastOptions)
          return (
            <View style={{ ...alertCustomStyles[toastOptions.type] }}>
              <Text style={{ color: 'white' }}>
                { toastOptions.message }
              </Text>
            </View>
          )
        }}
        */
      >
        <AlertScreen />
      </ToastProvider>
    </>
  )
}

export default App