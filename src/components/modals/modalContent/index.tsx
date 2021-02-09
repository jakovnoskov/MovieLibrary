import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash-es'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { RootState } from '../../../redux/store/'
import { setMenuData } from '../../../redux/actions/films'
import { setFavoritesList } from '../../../redux/actions/favorites'
import { setSelectedFilmItem } from '../../../redux/actions/films'
//import Animated from 'react-native-reanimated'


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

const ModalContent = () => {

  const selectedFilmItem = useSelector((state: RootState) => state["films"].selectedFilmItem)
  const menuData = useSelector((state: RootState) => state["films"].menuData)
  const favoritesList = useSelector((state: RootState) => state["favorites"].favoritesList)
  const [textShown, setTextShown] = useState(false)
  const dispatch = useDispatch()

  const setFovarite = (item: any) => {
    console.log(item)
    const _mdata: any = _.cloneDeep(menuData)
    const currentItem = _mdata.findIndex((el: any) => el.id == item.id)
    let _currentFlist: any = _.cloneDeep(favoritesList)
    const _item: any = _.cloneDeep(item)

    if (item.favorite) {
      _item.favorite = false
      const currentFavoriteItem = _currentFlist.findIndex((el: any) => el.id == item.id)
      _currentFlist.splice(currentFavoriteItem, 1)
      _mdata[currentItem].favorite = false
    } else {
      _item.favorite = true
      _currentFlist.push(_item)
      _mdata[currentItem].favorite = true
    }

    dispatch(setSelectedFilmItem(_item))
    dispatch(setMenuData(_mdata))
    dispatch(setFavoritesList(_currentFlist))
  }

  console.log(selectedFilmItem)

  useEffect(() => {
    setTextShown(false)
}, [selectedFilmItem])


  return (

    <View style={styles.listItem}>

      <View style={styles.header}><View style={styles.panelHandle} /></View>
      <ScrollView>
        <View style={styles.topBox}>
          {RenderScore(selectedFilmItem.rt_score)}

          <TouchableOpacity
            activeOpacity={.7}
            onPress={async () => await setFovarite(selectedFilmItem)}
            style={styles.fovariteBox}>
            <Icon
              name={selectedFilmItem.favorite ? 'bookmark' : 'bookmark-outline'}
              color={selectedFilmItem.favorite ? '#2a2a2a' : '#2a2a2a'}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.develloperBox}>
          <Text style={styles.filmTitle} numberOfLines={2}>{selectedFilmItem.title} ({selectedFilmItem.release_date})</Text>
          <Text style={styles.devValue} numberOfLines={2}>{selectedFilmItem.director}</Text>
          <Text style={styles.devTitle}>Director</Text>
          <Text style={styles.devValue} numberOfLines={2}>{selectedFilmItem.producer}</Text>
          <Text style={styles.devTitle}>Producer</Text>
        </View>
        <View style={styles.descriptionBox}>

          <Text style={styles.desc} numberOfLines={textShown ? undefined : 3}>{selectedFilmItem.description}</Text>
          <Text onPress={() => setTextShown(!textShown)} style={{ lineHeight: 21, marginTop: 10, color: '#f30000' }}>
            {textShown ? 'Свернуть' : 'Развернуть.'}
          </Text>
        </View>
      </ScrollView>

    </View>

  )
}

export default ModalContent