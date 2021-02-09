/**
 * КОМПОНЕНТ вывод списка фильмов студии “Ghibli” 
 */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash-es'
import { fetchApi } from '../../redux/actions/api'
import { FlatList, ActivityIndicator, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './styles'
import Item from '../../components/item'
import ModalContent from '../../components/modals/modalContent'
import { setMenuData } from '../../redux/actions/films'
import { setSelectedFilmItem } from '../../redux/actions/films'
import { setFavoritesList } from '../../redux/actions/favorites'
import { RootState } from '../../redux/store/'
import BottomSheet from 'reanimated-bottom-sheet'

const filmList = `https://ghibliapi.herokuapp.com/films/`

const FilmList = () => {

    const menuData = useSelector((state: RootState) => state["films"].menuData)
    const favoritesList = useSelector((state: RootState) => state["favorites"].favoritesList)
    const [loading, setLoading] = useState(false)
    const [overlay, setOverlay] = useState(false)

    const sheetRef: any = React.useRef(null)

    const dispatch = useDispatch()

    const setFovarite = ({ item }: any) => {
        const _mdata: any = _.cloneDeep(menuData)
        const currentItem = _mdata.findIndex((el: any) => el.id == item.id)
        let _currentFlist: any = _.cloneDeep(favoritesList)

        if (item.favorite) {
            const currentFavoriteItem = _currentFlist.findIndex((el: any) => el.id == item.id)
            _currentFlist.splice(currentFavoriteItem, 1)
            _mdata[currentItem].favorite = false
        } else {
            const _item: any = _.cloneDeep(item)
            _item.favorite = true
            _currentFlist.push(_item)
            _mdata[currentItem].favorite = true
        }
        dispatch(setMenuData(_mdata))
        dispatch(setFavoritesList(_currentFlist))
    }

    const selectItem = ({ item }: any) => {
        dispatch(setSelectedFilmItem(item))
        sheetRef.current.snapTo(0)
        setOverlay(true)
    }

    const closeModal = () => {
        setOverlay(false)
        sheetRef.current.snapTo(1)
    }

    const loadData = async ({ setMenuData, setLoading, }: any) => {
        setLoading(true)
        dispatch(fetchApi({
            params: {
                url: filmList,
                auth: true,
                method: 'GET'
            },
            callbacks: {
                200: async ({ response }: any) => {
                    //console.log(response)
                    if (response.length > 0) {
                        const rdr = _.cloneDeep(response)
                        dispatch(setMenuData(rdr))
                        setLoading(false)
                    } else return setLoading(false)
                }
            }
        }))
    }

    useEffect(() => {
        loadData({
            dispatch,
            setMenuData,
            setLoading,
        })
    }, [])

    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#fff', position: 'relative' }}>
                <FlatList
                    data={menuData}
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
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={() => closeModal()}
                    style={[styles.overlay, overlay ? styles.overlayShow : styles.overlayHide]}
                />
            </SafeAreaView>

            <BottomSheet
                ref={sheetRef}
                onCloseStart={() => closeModal()}
                renderContent={() => <ModalContent />}
                snapPoints={['70%', 0]}
                initialSnap={1}
            />
        </>
    )
}
export default FilmList