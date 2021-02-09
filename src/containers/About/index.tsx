/**
 * КОМПОНЕНТ вывод списка фильмов студии “Ghibli” 
 */

import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, SafeAreaView, ScrollView, Linking, TouchableOpacity } from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'


const About = () => {

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={styles.topBox}>
                    <LinearGradient
                        colors={['#30bb92', '#7ce1a5']}
                        style={styles.scoreBox}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        locations={[0, 0.9]}
                    >
                        <Icon name={'information-variant'} color={'#fff'} size={140} />
                    </LinearGradient>

                </View>
                <View style={styles.develloperBox}>
                    <Text style={styles.filmTitle} numberOfLines={2}>Список фильмов студии “Ghibli”</Text>
                    <Text style={styles.devValue} numberOfLines={2}>Яков Носков</Text>
                    <Text style={styles.devTitle}>Разработчик</Text>

                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/jakovnoskov')}>
                        <Text style={[styles.devValue, {textDecorationLine:'underline'}]} >https://github.com/jakovnoskov</Text>
                    </TouchableOpacity>

                    <Text style={styles.devTitle}>GitHub</Text>
                </View>
                <View style={styles.descriptionBox}>
                    <Text style={styles.desc}>
                        На первой вкладке выводится список фильмов студии “Ghibli”, элементы списка карточки которые содержат
                        название фильма, год выпуска, описание, оценка пользователя и кнопка “Добавить в избранное”.
                    </Text>
                    <Text style={styles.desc}>
                        Нажатие на карточку открывает модальное окно с описанием в три строки, если описание более длинное, то тогда лишний текст скрывается под кнопкой “Развернуть”,
                    нажатие на эту кнопку будет отображать весь текст. Через модальное окно можно добавить филмь в избранное или убрать из этого списка.</Text>
                    <Text style={styles.desc}>
                        На второй вкладке находятся избранные фильмы, фильм попадает в избранное по нажатию на кнопку на карточке или в модальном окне.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
export default About