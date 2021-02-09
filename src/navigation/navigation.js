import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Containers from '../containers'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'


const GradientBackground = () => {
  return <LinearGradient
    colors={['#7ce1a5', '#30bb92']}
    style={{ flex: 1 }}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
    locations={[0, 0.9]}
  />
}

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator();

function MovieListStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          title: 'Cписок фильмов',
          headerTitleStyle: { color: '#fff' },
          headerBackground: () => <GradientBackground/>,
        }}
        name="MovieList" component={Containers.FilmList} />
    </HomeStack.Navigator>
  )
}

function FavoritesListStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          title: 'Избранное',
          headerTitleStyle: { color: '#fff' },
          headerBackground: () => <GradientBackground/>,
        }}
        name="MovieList" component={Containers.FavoritesList} />
    </HomeStack.Navigator>
  )
}

function AboutStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          title: 'О приложении',
          headerTitleStyle: { color: '#fff' },
          headerBackground: () => <GradientBackground/>,
        }}
        name="MovieList" component={Containers.About} />
    </HomeStack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MovieList"
      tabBarOptions={{
        activeTintColor: '#64d7a0',
        inactiveTintColor: '#9ca7b3',
      }}
    >
      <Tab.Screen
        name="MovieList"
        component={MovieListStack}
        options={{
          tabBarLabel: 'Cписок фильмов',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'movie-roll'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesListStack}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'bookmark-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={{
          tabBarLabel: 'О приложении',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'information-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}