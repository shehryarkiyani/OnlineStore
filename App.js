import * as React from 'react';
import { Text, View, StyleSheet,FlatList,Image } from 'react-native';
import Constants from 'expo-constants';
import Employee from './components/Employee';
import Product from './components/Product';
import Order from './components/Order';
import Employeelist from './components/Employeelist';
import Productlist from './components/Productlist';
import Orderlist from './components/Orderlist';
import { Card } from 'react-native-paper';
import HomeScreen from './components/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeDetails from './components/EmployeeDetails';
import ProductDetails from './components/ProductDetails';
import color from './config/color';
import OrderDetails from './components/OrderDetails';


const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Online Store',headerStyle: {
            backgroundColor: color.Red,
          },
          headerTintColor: color.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
          
          <Stack.Screen name="Employeelist" component={Employeelist} options={{ headerStyle: {
            backgroundColor: color.Red,
          },
          headerTintColor: color.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
          <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} options={{ headerStyle: {
            backgroundColor: color.Red,
          },
          headerTintColor: color.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
          <Stack.Screen name="Productlist" component={Productlist} options={{ headerStyle: {
            backgroundColor: color.Red,
          },
          headerTintColor: color.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerStyle: {
            backgroundColor: color.Red,
          },
          headerTintColor: color.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
           <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ headerStyle: {
            backgroundColor: color.Red,
          },
          headerTintColor: color.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
           <Stack.Screen name="Orderlist" component={Orderlist} options={{ headerStyle: {
            backgroundColor: color.Red,
          },
          headerTintColor: color.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  
});
