import React, { useEffect, useState } from 'react'
import _ from 'lodash-es'
import { View, Text } from 'react-native'
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

const ModalContent = ({item}: any) => {
  const [textShown, setTextShown] = useState(false)

    useEffect(() => {setTextShown(false)}, [item])

  return (

    <View style={styles.listItem}>
      <View style={styles.header}><View style={styles.panelHandle} /></View>
      <Text style={styles.filmTitle} numberOfLines={2}>{item.title} ({item.release_date})</Text>

      <View style={styles.develloperBox}>
        <View style={styles.leftSide}>
        {RenderScore(item.rt_score)}
        </View>
        <View style={styles.rightSide}>
        <Text style={styles.devValue} numberOfLines={2}>{item.director}</Text>
          <Text style={styles.devTitle}>Director</Text>
          <Text style={styles.devValue} numberOfLines={2}>{item.producer}</Text>
          <Text style={styles.devTitle}>Producer</Text>
        </View>
      </View>
      <View style={styles.descriptionBox}>
          <Text style={styles.desc} numberOfLines={textShown ? undefined : 3}>{item.description}</Text>
          <Text onPress={() => setTextShown(!textShown)} style={{ lineHeight: 21, marginTop: 10, color: '#f30000' }}>
            {textShown ? 'Свернуть' : 'Развернуть.'}
          </Text>
      </View>


    </View>

  )
}

export default ModalContent