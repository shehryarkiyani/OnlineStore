import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import MyComponent from './MyComponent';
import Employee from './Employee';
const EmployeeDetails=({route})=>{
 const{ id,name,image,Designation,nationality,phone,email}=route.params;

return(
  <View style={styles.container}>
  <MyComponent id={id} image={image} name={name} designation={Designation} national={nationality} phone={phone} email={email}/></View>
)
}
const styles=StyleSheet.create({
  container:{

    padding: 24,
  }
})

export default EmployeeDetails