import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface buttonProp {
  buttonLabel: string
  onClick: () => void
}
function Button({ buttonLabel, onClick }: buttonProp) {
  return (
  <Text style={styles.button} onPress={onClick} >{buttonLabel}</Text>
  )
}

export default Button


const styles=StyleSheet.create({
    button:{
        backgroundColor:"blue",
        color:'white',
        paddingBlock:8,
        width:100,
        borderRadius:20,
        textAlign:'center'
        
    }
})