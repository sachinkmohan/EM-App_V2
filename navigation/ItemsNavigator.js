//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';

const ItemsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryItems: {
        screen: CategoryItemsScreen
    }
});

export default createAppContainer(ItemsNavigator);