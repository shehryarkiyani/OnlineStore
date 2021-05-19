import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import {  Card, Title} from 'react-native-paper';
import color from '../config/color';

const MyComponent=({id,name,designation,onPress,phone,email,national,description,price,image,orderDate,status,gender,cname,Age,ordernum})=>{
console.log(cname)
return(
<TouchableOpacity id={id} onPress={onPress}>
  <Card style={styles.card}> 
    <Card.Cover source={image} style={styles.image}/>
    <Card.Content>
    {ordernum&&
    <View style={styles.v}>
    <Title style={styles.txt}>Order num: </Title>
    <Title style={styles.txt}>{ordernum}</Title>
    </View>
    }
      { name&& 
      <View style={styles.v}>
      <Title style={styles.txt}>Person name: </Title>
      <Title style={styles.txt}>{name}</Title>
      </View>}
     {price&& 
     <View style={styles.v}>
     <Title style={styles.txt}>Price: </Title>
     <Title style={styles.txt}>{price}</Title>
     </View>
     }
    {cname&&
    <View style={styles.v}>
     <Title style={styles.txt}>customer Name: </Title>
    <Title style={styles.txt}>{cname}</Title>
    </View>
    }
    {Age&&
    <View style={styles.v}>
    <Title style={styles.txt}>Age: </Title>
    <Title style={styles.txt}>{Age}</Title>
    </View>
    }
      {gender&&
      <View style={styles.v}>
      <Title style={styles.txt}>Gender: </Title>
      <Title style={styles.txt}>{gender}
      </Title>
      </View>}
     {orderDate&&
     <View style={styles.v}>
     <Title style={styles.txt}>Order Date : </Title>
     <Title style={styles.txt}>{orderDate}</Title>
     </View>
     }
     {status&&
     <View style={styles.v}>
     <Title style={styles.txt}>Order Status: </Title>
     <Title style={styles.txt}>{status}</Title>
     </View>
     }
      {designation&&
      <View style={styles.v}>
      <Title style={styles.txt}>Designation : </Title>
      <Title style={styles.txt}>{designation}</Title>
      </View>
      }
      {national&&
      <View style={styles.v}>
      <Title style={styles.txt}>Nationality: </Title>
      <Title style={styles.txt}>{national}
      </Title>
      </View>}
      {phone 

      &&
      <View style={styles.v}>
      <Title style={styles.txt}>Phone number: </Title>
      <Title style={styles.txt}>{phone}</Title></View>
      }
      {email 
      &&
      <View style={styles.v}>
      <Title style={styles.txt}>Email: </Title><Title style={styles.txt}>{email}</Title></View>
      }
      {description &&
      <View style={styles.v}>
      <Title style={styles.txt}>Product description</Title>
      <Title style={styles.designation}>{description}</Title>
      </View>
      }
    </Card.Content>
  </Card>
  </TouchableOpacity>
)
}
const styles=StyleSheet.create({
image:{
  width:200,
  },
designation:{
  fontSize:15,
  color:color.gray
},
card:{
  marginBottom:10,
  },
  txt:{
    fontSize:15,
  color:color.Red
  },
 v:{
flexDirection:'row'
  },
  

})
export default MyComponent;