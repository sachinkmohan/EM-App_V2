import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
  Platform
} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

import { CATEGORIES
 } from '../data/dummy-data';

import Colors from '../constants/Colors';
const CategoriesScreen = props => {
    //console.log(props);
 const renderGridItem = (itemData) => {
     return (
       <TouchableOpacity
        style={styles.gridItem} 
        onPress={() => {
          props.navigation.navigate({routeName: 'CategoryItems'});
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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor // white tint not working on the header
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
