import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import MyComponent from './MyComponent';
import Employee from './Employee';
import EmployeeDetails from './EmployeeDetails';

const Employeelist=({navigation})=> {
  return (
    <View style={styles.container}>
<FlatList
     data={Employee}
     keyExtractor={(key)=>key.id.toString()}
     renderItem={({item})=><MyComponent onPress={()=>navigation.navigate('EmployeeDetails',item)}  id={item.id} image={item.image} name={item.name} designation={item.Designation}/>}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  
});
export default Employeelist;