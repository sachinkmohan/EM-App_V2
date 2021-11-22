import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryItemsScreen = (props) => {
	const catId = props.navigation.getParam("categoryId");

	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<ScrollView>
			{/* <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} /> */}
			<Text style={styles.title}>Content</Text>
			{selectedCategory.firstContent.map((firstcontent) => (
				<Text>{firstcontent}</Text>
			))}
			<Text style={styles.title}>Sub steps</Text>
			{selectedCategory.secondContent.map((secondcontent) => (
				<Text>{secondcontent}</Text>
			))}
			<View style={styles.screen}>
				{/* <Text>The Categories Items Screen!</Text>
				<Text>{selectedCategory.title}</Text>
				<Text>{selectedCategory.id}</Text> */}
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
