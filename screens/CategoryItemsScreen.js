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
	const catId = props.navigation.getParam("categoryId");

	// useEffect(() => {
	// 	Permissions.getAsync(Permissions.NOTIFICATIONS)
	// 		.then((statusObj) => {
	// 			if (statusObj.status !== "granted") {
	// 				return Permissions.askAsync(Permissions.NOTIFICATIONS);
	// 			}
	// 			return statusObj;
	// 		})
	// 		.then((statusObj) => {
	// 			if (statusObj.status !== "granted") {
	// 				throw new Error("Permission not granted");
	// 			}
	// 		})
	// 		.then(() => {
	// 			console.log("Getting token");
	// 			return Notifications.getExpoPushTokenAsync();
	// 		})
	// 		.then((data) => {
	// 			console.log(data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			return null;
	// 		});
	// }, []);

	// useEffect(() => {
	// 	const backgroundSubscription =
	// 		Notifications.addNotificationResponseReceivedListener((response) => {
	// 			console.log(response);
	// 		});

	// 	const foregroundSubscription =
	// 		Notifications.addNotificationReceivedListener((notitification) => {
	// 			console.log(notitification);
	// 		});

	// 	return () => {
	// 		backgroundSubscription.remove();
	// 		foregroundSubscription.remove();
	// 	};
	// }, []);
	// Commenting push notifications for now.

	const triggerNotificationHandler = () => {
		// Notifications.scheduleNotificationAsync({
		// 	content: {
		// 		title: "My first notification",
		// 		body: "This is the first one you are receiving",
		// 	},
		// 	trigger: {
		// 		seconds: 10,
		// 	},
		// }); // Commenting as we are not using local notifications anymore.
	};

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

CategoryItemsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam("categoryId");
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
