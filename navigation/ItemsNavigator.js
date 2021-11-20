//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';

import Colors from '../constants/Colors';

const ItemsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen, 
        navigationOptions: { 
          headerTitle: 'Categories Aanu',
    }},
    CategoryItems: {
        screen: CategoryItemsScreen,
        navigationOptions: {
        }
    },

}, {
    defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor // white tint not working on the header
    }
});

export default createAppContainer(ItemsNavigator);