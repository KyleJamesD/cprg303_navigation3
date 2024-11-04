import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Pressable,
    Image,
    

  } from 'react-native';

  import { useArray1 } from "../Main";
  import { TouchableOpacity } from "react-native";
  import EditTransaction from "./EditTransactions";


  type objArray1Type = {
    id: number;
    title: string;
    description: string;
    amount: string;
    radioType: string;
  };

  function Details ({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {

 const {id , title, description, amount, radioType} = route.params;


 // Create a function for the header right button
 const handleEditPress = () => {
  // Navigate to the AddTransactions screen and pass the necessary data
  navigation.navigate('EditTransactions', { id, title, description, amount, radioType});
};

// Set header options including the button
React.useEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={handleEditPress}>
        <Text style={{ fontSize: 15, color: '#FFF' }}>Edit</Text>
      </TouchableOpacity>
    ),
  });
}, []);

    return (
            <View style={style.outisdeContainer}>
              <View style={style.profileCard}>
                  <Image style={style.bannerImage} source={require('../../assets/banner2.jpg')} />
                  <Text style={style.title}>{title}</Text>
                  <Text style={style.amount}>{amount}</Text>
                  <Text style={style.description}>{description}</Text>      
              </View>
            </View>
    );

  }

  const style = StyleSheet.create({
    outisdeContainer: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',

    },

    profileCard: {
      alignItems: 'center',
      height:400,
      width: '80%',
      elevation: 20,
      borderRadius: 20,
      backgroundColor: '#FFF0D1',
      resizeMode: 'cover',
      overflow: 'hidden',
    },

    bannerImage: {
      height:180,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,    
    },

    profilePhoto: {
      height:140,
      width: 140,
      borderRadius: 140/2,
      position: 'absolute',
      top: 110,
      borderWidth: 7,
      borderColor: 'white',
      resizeMode: 'cover', 
    },

    title : {
      marginTop : 70,
      fontSize: 30,
      fontWeight: '600',
      fontFamily : 'Pacifico',
      color: '#FF6600',
    },

    amount : {
      fontSize: 25,
      fontWeight: '400',
      fontFamily: 'Pacifico',
      color: 'black',
    },

    description: {
      fontSize: 22,
      fontFamily: 'sans-serif',
      fontWeight: '400',
    },

    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '80%',
      marginTop: 35,

    },

    social : {
    height: 30,
    width: 30,
    borderRadius: 30/2,
    resizeMode: 'cover',

    },


  }) 

  export default Details;

