import React from 'react'
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native'

const DefaultLayout = () => (
  <View style={styles.default}>
    <Text style={styles.box} />
  </View>
)

const HorizontalLayout = () => (
  <View style={styles.horizontal}>
    <Text style={styles.box} />
    <Text style={styles.box} />
  </View>
)

const VerticalLayout = () => (
  <View style={styles.vertical}>
    <Text style={styles.box} />
    <Text style={styles.box} />
  </View>
)

const CenterLayout = () => (
  <View style={styles.center}>
    <Text style={styles.box} />
    <Text style={styles.box} />
    <Text style={styles.box} />
  </View>
)

const TopBottomLeftRightLayout = () => (
  <View style={styles.top_bottom_left_right}>
    <Text style={styles.box} />
  </View>
)

function Flexbox(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Center Layout
      </Text>
      <CenterLayout />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column', // column, row, column-reverse, row-reverse
    justifyContent: 'center', // horizontal: flex-start, flex-end, center, space-between, space-around, space-evenly
  },
  default: {
    flexDirection: 'column', // column, row, column-reverse, row-reverse
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-between, space-around, space-evenly
    alignItems: 'stretch', // stretch, flex-start, flex-end, center, baseline
    minHeight: 200,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  horizontal: {
    flexDirection: 'column', // column, row, column-reverse, row-reverse
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-between, space-around, space-evenly
    // alignItems: 'stretch', // stretch, flex-start, flex-end, center, baseline
    minHeight: 200,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  vertical: {
    flexDirection: 'row', // column, row, column-reverse, row-reverse
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-between, space-around, space-evenly
    // alignItems: 'stretch', // stretch, flex-start, flex-end, center, baseline
    minHeight: 200,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  center: {
    flexDirection: 'row', // column, row, column-reverse, row-reverse
    justifyContent: 'center', // flex-start, flex-end, center, space-between, space-around, space-evenly
    alignItems: 'center', // stretch, flex-start, flex-end, center, baseline
    minHeight: 200,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  top_bottom_left_right: {
    flexDirection: 'column', // column, row, column-reverse, row-reverse
    justifyContent: 'center', // flex-start, flex-end, center, space-between, space-around, space-evenly
    alignItems: 'center', // stretch, flex-start, flex-end, center, baseline
    minHeight: 200,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  box: {
    width: 50,
    height: 50,
    margin: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingBottom: 25,
    paddingRight: 5,
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1.0)',
  },
})

export default Flexbox