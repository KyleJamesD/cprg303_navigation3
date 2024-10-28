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
  import { TransactionType_bgColor } from "../utility/utility";
  import Details from "./Details";


  type objArray1Type = {
    id: number;
    title: string;
    description: string;
    amount: string;
    radioType: string;
  };


  function Transactions({navigation} : {navigation : any}) : React.JSX.Element {


//***************************Get Transaction array from Context Provider********************************** */
const { Array1, setArray1 } = useArray1();




    
    function plusButtonPress () {
      console.log ('Pressed the plus button')
      // you can pass paraemteres to other screens this way but not functions or classes, you will get an unserializable error
      //navigation.navigate('AddTransactions',{array1: transactionArray, setarray1: settransactionArray});
      navigation.navigate('AddTransactions')
    }

    function transPress (task: {id: number; }) {
      navigation.navigate('Details', task)
    }

 

        return (
          <View style={styles.container}>
            {Array1.length == 0 ? 
            
            (<View style={styles.welcomeMsgContainer}>
              <Text style={styles.welcomeMsg}>Add Transactions To See Entry Here.</Text>
            </View>) 
            :
            (<ScrollView>
                            {Array1.map((task,id)  => 
                              (<View key={id} style={[styles.outertransactionbox,{}]}>
                                <TouchableOpacity onPress={()=>transPress(task)} style={[styles.innertransactionbox,{backgroundColor:TransactionType_bgColor[task.radioType]}]} >
                                  <Text style={styles.transactionTxt}>{task.title}</Text><Text style={styles.transactionTxt}>$ {task.amount}</Text>
                                  </TouchableOpacity>
                                  </View>))}
            </ScrollView>)
            }
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
    width:'70%',
  },
  welcomeMsg: {
    fontSize:25,
    fontWeight: '600',
    textAlign: 'center',
  },
  outertransactionbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  innertransactionbox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingLeft: 10,
    paddingRight:10,
  },
  transactionTxt: {
    fontSize:20,
  }
});

export default Transactions;


