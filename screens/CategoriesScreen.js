import React from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Button,
} from "react-native";
//import { TouchableOpacity } from 'react-native-gesture-handler';

import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
	//console.log(props);
	const Apple = () => {
		return (
			<View style={styles.buttoncontainer}>
				<Button title="Notify" />
				renderItem={Apple}
			</View>
		);
	};
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: "CategoryItems",
						params: {
							categoryId: itemData.item.id,
						},
					});
				}}
			/>
		);
	};
	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

const styles = StyleSheet.create({
	buttoncontainer: {
		position: "absolute",
		bottom: 60,
		left: 10,
	},
});

export default CategoriesScreen;
