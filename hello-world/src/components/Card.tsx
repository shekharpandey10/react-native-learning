import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Card(props: any) {
  const { title, description } = props
//   console.log(props.imageSource)
  return (
    <View style={styles.card}>
     
      <Text style={styles.title}> {title}</Text>
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
         <Text>{description}</Text>
       {props.imageSource && <Image source={{ uri: props.imageSource }}
        style={{ width: 50, height: 50 }} />}
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    color: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: 'blue',
    padding: 10,
    fontSize: 30,
    fontWeight: '500',
    textAlign:'center'
  },
})
