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



  function Transactions({navigation} : {navigation : any}) : React.JSX.Element {


//***************************Get Transaction array from Context Provider********************************** */
const { Array1, setArray1 } = useArray1();


function checkarray () {
    console.log(Array1);
}

    
    function plusButtonPress () {
      console.log ('Pressed the plus button')
      // you can pass paraemteres to other screens this way but not functions or classes, you will get an unserializable error
      //navigation.navigate('AddTransactions',{array1: transactionArray, setarray1: settransactionArray});
      navigation.navigate('AddTransactions')
    }


 

        return (
          <View style={styles.container}>
            {Array1.length == 0 ? (<View>
              <Text style={styles.welcomeMsg}>Add Transactions To See Entry Here.</Text>
            </View>) :
            (<ScrollView>
              {Array1.map((task,id)  => (<Pressable key={id}><Text>{task.title}</Text><Text>{task.amount}</Text></Pressable>))}
            </ScrollView>)}
            <TouchableOpacity onPress={plusButtonPress} style={styles.fab}>
              <Image 
                source={require('../../assets/icons/plus.png')} 
                style={styles.iconstyle} 
              />
            </TouchableOpacity>
          </View>
        );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Add a background color
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 30,
    padding: 15,

  },
  iconstyle: {
    width: 50, 
    height: 50,
  },
  welcomeMsgContainer:{


  },
  welcomeMsg: {
    fontSize:25,
    alignItems:'center',
    width:'70%',

  },
  transactionbox: {

  },
});

export default Transactions;


