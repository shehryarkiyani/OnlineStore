import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import MyComponent from './MyComponent';
import Order from './Order';
import OrderDetails from './OrderDetails';

const Orderlist=({navigation})=> {
  return (
    <View style={styles.container}>
<FlatList
     data={Order}
     keyExtractor={(key)=>key.ordernum.toString()}
     renderItem={({item})=><MyComponent onPress={()=>navigation.navigate('OrderDetails',item)}  ordernum={item.ordernum} image={item.image} price={item.price} name={item.name} />}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  
});
export default Orderlist;