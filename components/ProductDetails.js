import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import MyComponent from './MyComponent';
const ProductDetails=({route})=>{
 const{ id,name,image,description,price}=route.params;

return(
  <View style={styles.container}>
  <MyComponent id={id} image={image} name={name} price={price} description={description} />
</View>
)
}
const styles=StyleSheet.create({
  container:{

    padding: 24,
  }
})

export default ProductDetails;