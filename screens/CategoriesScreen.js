import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

import { CATEGORIES
 } from '../data/dummy-data';

const CategoriesScreen = props => {
    //console.log(props);
 const renderGridItem = (itemData) => {
     return (
       <TouchableOpacity
        style={styles.gridItem} 
        onPress={() => {
          props.navigation.navigate({routeName: 'CategoryItems', params: {
            categoryId: itemData.item.id
          }});
        }}
       >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
       </TouchableOpacity>);
 }
  return (
    <FlatList 
      keyExtractor = {(item, index) => item.id}
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2} />
    );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
      flex: 1,
      margin: 10,
      height: 100
  }
});

export default CategoriesScreen;
