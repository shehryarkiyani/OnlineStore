import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import MyComponent from './MyComponent';
const OrderDetails=({route})=>{
 const{ ordernum,name,image,description,price,orderDate,status}=route.params;
const{customerInfo}=route.params
const{gender,customername,Age}=customerInfo
return(
  <View style={styles.container}>
  <MyComponent ordernum={ordernum} image={image} name={name} price={price} orderDate={orderDate} status={status} gender={"Male"} cname={customername} Age={Age} />
</View>
)
}
const styles=StyleSheet.create({
  container:{

    padding: 24,
  }
})

export default OrderDetails;