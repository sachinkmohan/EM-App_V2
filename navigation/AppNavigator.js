//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryItemsScreen, {
	screenOptions,
} from "../screens/CategoryItemsScreen";

// import DummyScreen from "../screens/DummyScreen";

import Colors from "../constants/Colors";

const EMStack = createStackNavigator();

const AppNavigator = (props) => {
	return (
		<NavigationContainer>
			<EMStack.Navigator>
				<EMStack.Screen name="Category" component={CategoriesScreen} />
				<EMStack.Screen
					name="CategoryItems"
					component={CategoryItemsScreen}
					options={screenOptions}
				/>
			</EMStack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
// const ItemsNavigator = createStackNavigator(
// 	{
// 		Categories: {
// 			screen: CategoriesScreen,
// 			navigationOptions: {
// 				headerTitle: "Categories",
// 			},
// 		},
// 		CategoryItems: {
// 			screen: CategoryItemsScreen,
// 			navigationOptions: {},
// 		},
// 	},
// 	{
// 		defaultNavigationOptions: {
// 			headerStyle: {
// 				backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
// 			},
// 			headerTintColor:
// 				Platform.OS === "android" ? "white" : Colors.primaryColor, // white tint not working on the header
// 		},
// 	}
// );
