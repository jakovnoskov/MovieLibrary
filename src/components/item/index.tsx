import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, Animated, Easing, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'


const RenderScore = (score: any) => {
  let color: string = 'yellow'
  const numScore: number = parseInt(score)

  if (numScore > 1 && numScore < 50) {
    color = 'red'
  } else if (numScore > 50 && numScore < 85) {
    color = '#fc3'
  } else if (numScore > 85 && numScore < 100) {
    color = '#6c3'
  } else {
    color = '#6c3'
  }

  return (
    <View style={[{ backgroundColor: color }, styles.scoreBox]}>
      <Text style={styles.score} numberOfLines={1}>{score}</Text>
    </View>
  )
}

const Item = ({ item, actions, loading }: any) => {

  return (
    <TouchableOpacity
      style={styles.listItem}
      activeOpacity={.7}
      onPress={async () => await actions.selectItem({ item })}
    >
      {RenderScore(item.rt_score)}
      <View style={styles.sideLeft}>
        <Text style={styles.filmTitle} numberOfLines={1}>{item.title} ({item.release_date})</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
      </View>
      <TouchableOpacity
        disabled={!loading ? false : true}
        activeOpacity={.7}
        onPress={async () => {
          !loading ? await actions.setFovarite({ item }) : null
        }}
        style={styles.sideRight}>
        <Icon
          name={item.favorite ? 'bookmark' : 'bookmark-outline'}
          color={item.favorite ? '#64d7a0' : '#9ca7b3'}
          size={30}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Item