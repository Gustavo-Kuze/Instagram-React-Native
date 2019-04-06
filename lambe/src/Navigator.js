import React from 'react';
import { createBottomTabNavigator,createAppContainer  } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import Feed from './screens/Feed';
 
const MenuRoutes = createBottomTabNavigator({
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'Add photo',
        screen: Feed,
        navigationOptions: {
            title: 'Adicionar foto',
            tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Feed,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }
    }
})
 
const MenuNavigator = createAppContainer(MenuRoutes);
export default MenuNavigator;
 