
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryItemsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Categories Items Screen!</Text>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

CategoryItemsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
      headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryItemsScreen;
