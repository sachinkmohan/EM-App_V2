import React, { useEffect } from "react";
import {
	ScrollView,
	View,
	Text,
	Image,
	Button,
	StyleSheet,
} from "react-native";
// import * as Notifications from "expo-notifications";
// import * as Permissions from "expo-permissions";

// Notifications.setNotificationHandler({
// 	handleNotification: async () => {
// 		return {
// 			shouldShowAlert: true,
// 		};
// 	},
// });

import { CATEGORIES } from "../data/dummy-data";

const CategoryItemsScreen = (props) => {
	// const catId = props.navigation.getParam("categoryId");
	const catId = route.params.categoryId;
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<ScrollView>
			{/* <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} /> */}
			<Text style={styles.title}>Content</Text>
			{selectedCategory.firstContent.map((firstcontent) => (
				<Text key={firstcontent}>{firstcontent}</Text>
			))}
			<Text style={styles.title}>Sub steps</Text>
			{selectedCategory.secondContent.map((secondcontent) => (
				<Text key={secondcontent}>{secondcontent}</Text>
			))}
			<View style={styles.screen}>
				{/* <Text>The Categories Items Screen!</Text>
				<Text>{selectedCategory.title}</Text>
				<Text>{selectedCategory.id}</Text> */}
				{/* <Button
					title="Trigger Notification"
					onPress={triggerNotificationHandler}
				/> */}
				{/* to test the local notification - for now disabling it */}
			</View>
		</ScrollView>
	);
};

//changed the first line here for RN 5
export const screenOptions = (navigationData) => {
	const catId = route.params.categoryId; // changed to RN 5 format
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "center",
	},
});

export default CategoryItemsScreen;
