import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import MyComponent from './MyComponent';
import Product from './Product';
import ProductDetails from './ProductDetails';

const Productlist=({navigation})=> {
  return (
    <View style={styles.container}>
<FlatList
     data={Product}
     keyExtractor={(key)=>key.id.toString()}
     renderItem={({item})=><MyComponent onPress={()=>navigation.navigate('ProductDetails',item)}  id={item.id} image={item.image} price={item.price} name={item.name} />}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  
});
export default Productlist;