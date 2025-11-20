import { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Alert,
  StatusBar,
  RefreshControl
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const [loading, setLoading] = useState(true)
const [refreshing,setRefreshing]=useState(false)
const onRefresh=()=>{
  setRefreshing(true)
  setTimeout(() => {
    console.log('refreshed')
    setRefreshing(false)
    setLoading(false)
  }, 3000);
}
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 3000)
  }, [])
  const handlePress = () => {
    console.log('hello')
     Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  return (
 <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}
  tintColor={'green'}// only ios
  title='pull to refresh'
 />}>
  <Text>this is shekhar</Text>
 </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    height: 10,
    width: 10,
    borderColor: 'red',
    borderRadius: 9999, // ✔ circle
  },
})
