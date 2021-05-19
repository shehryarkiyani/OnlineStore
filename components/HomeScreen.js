import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import {  Card, Title} from 'react-native-paper';
import Constants from 'expo-constants';
import color from '../config/color';
import Employeelist from './Employeelist';
import Productlist from './Productlist';
import Orderlist from './Orderlist';
const HomeScreen=({navigation})=>{
return(
  <View style={styles.outercontainer}>
  <TouchableOpacity style={styles.container}  onPress={()=>navigation.navigate('Productlist')}>
  <Text style={[styles.txt,styles.t1]}>Manage Products</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Employeelist')}>
  <Text style={[styles.txt,styles.t2]}>Manage Employees</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.container}  onPress={()=>navigation.navigate('Orderlist')}>
  <Text style={styles.txt}>Manage Orders</Text>
  </TouchableOpacity>
  </View>
)
}
const styles=StyleSheet.create({
  container:{
    width:110
  },
  outercontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:color.lightblue
  },
txt:{
  color:color.Blue,
  fontSize:22,
  fontWeight:"bold",
},
t1:{
 marginTop:-20,
  marginBottom:70
},
t2:{
marginBottom:70
}
})
export default HomeScreen;