import { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  ActivityIndicator,
  Alert,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native'
import Card from './src/components/Card'

export default function App() {
  const [refreshing, setRefreshing] = useState(false)
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'card 1',
      description: 'this is the card 1',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 2,
      title: 'card 2',
      description: 'this is the card 2',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 3,
      title: 'card 4',
      description: 'this is the card 4',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 4,
      title: 'card 5',
      description: 'this is the card 5',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 6,
      title: 'card 6',
      description: 'this is the card 6',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 7,
      title: 'card 7',
      description: 'this is the card 7',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 8,
      title: 'card 8',
      description: 'this is the card 8',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 9,
      title: 'card 9',
      description: 'this is the card 9',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 10,
      title: 'card 10',
      description: 'this is the card 10',
      imageSource: 'https://picsum.photos/id/237/200/300',
    },
  ])
  const handleRefresh = () => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 3000)
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })
  if (loading) {
    return (
      <ActivityIndicator style={styles.loading} size='large' color='#00ff00' />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>this is shekhar pandey</Text> */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {cards.map((item, id) => (
          <Card
            key-={item.id}
            title={item.title}
            description={item.description}
            imageSource={item.imageSource}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 20,
    padding: 20,
  },
  box: {
    height: 10,
    width: 10,
    borderColor: 'red',
    borderRadius: 9999, // ✔ circle
  },
  loading: {
    flex: 1,
  },
})
