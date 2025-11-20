import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text,View ,ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 3000)

  }, [])
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size={'large'} color={'red'} /> : <Text>hello</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff'
  },
  box: {
    height: 10,
    width: 10,
    borderColor: 'red',
    borderRadius: 9999, // ✔ circle
  },
})
