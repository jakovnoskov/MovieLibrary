/**
 * КОМПОНЕНТ вывод списка избранных фильмов студии “Ghibli” 
 */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash-es'
import { FlatList, ActivityIndicator, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './styles'
import Item from '../../components/item'
import ModalContent from '../../components/modals/modalContent'
import { setMenuData } from '../../redux/actions/films'
import { setFavoritesList } from '../../redux/actions/favorites'
import { setSelectedFavoritesItem } from '../../redux/actions/favorites'
import { RootState } from '../../redux/store/'
import BottomSheet from 'reanimated-bottom-sheet'

const FavoritesList = () => {

    const selectedFavoritesItem = useSelector((state: RootState) => state["favorites"].selectedFavoritesItem)
    const menuData = useSelector((state: RootState) => state["films"].menuData)
    const favoritesList = useSelector((state: RootState) => state["favorites"].favoritesList)
    const flatListRef: any = React.useRef()
    const sheetRef: any = React.useRef(null)
    const [loading, setLoading] = useState(false)


    const dispatch = useDispatch()

    const setFovarite = ({ item }: any) => {
        console.log(item)
        const _mdata: any = _.cloneDeep(menuData)
        const currentItem = _mdata.findIndex((el: any) => el.id == item.id)
        let _currentFlist: any = _.cloneDeep(favoritesList)

        const currentFavoriteItem = _currentFlist.findIndex((el: any) => el.id == item.id)
        _currentFlist.splice(currentFavoriteItem, 1)
        _mdata[currentItem].favorite = false

        dispatch(setMenuData(_mdata))
        dispatch(setFavoritesList(_currentFlist))

        // если элементов меньше 10 то прокручиваем в начало списка 
        if (_currentFlist.length < 10) return toTop()
    }

    const selectItem = ({ item }: any) => {
        dispatch(setSelectedFavoritesItem(item))
        sheetRef.current.snapTo(0)
    }

    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })

    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#fff' }}>
                <FlatList
                    ref={flatListRef}
                    data={favoritesList}
                    contentContainerStyle={styles.sListBox}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={250}
                    onEndReachedThreshold={0.01}
                    renderItem={({ item }) => (
                        <Item
                            item={item}
                            loading={loading}
                            actions={{
                                setFovarite: setFovarite,
                                selectItem: selectItem,
                            }}
                        />
                    )}
                    ListEmptyComponent={() => !loading ? <View style={styles.srBox}><Text style={styles.srt}>Список пуст.</Text></View> : null}
                    keyExtractor={(item: any) => "item_" + item.id.toString()}
                    ListFooterComponent={() => loading ? <View style={styles.srBox}><ActivityIndicator size="large" /></View> : null}
                />
            </SafeAreaView>
            <BottomSheet
                ref={sheetRef}
                renderContent={() => <ModalContent item={selectedFavoritesItem} />}
                snapPoints={['80%', 0]}
                initialSnap={1}
            />
        </>
    )
}
export default FavoritesList