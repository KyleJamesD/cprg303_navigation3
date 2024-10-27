import * as React from 'react';
import {
  SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    PermissionsAndroid,
    Linking,
    Alert,
    TouchableOpacity,
    Image
  } from 'react-native';


  import { useState } from 'react';
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddTransaction from './components/AddTransaction';
import Transactions from './components/Transaction';

  const Stack = createNativeStackNavigator();

  function Main() : React.JSX.Element {            


    //***********************************Screen options funciotns (the Header)*************************************** */

            function headerRightButton( title: string) : React.JSX.Element {
              return (
                  <TouchableOpacity
                  onPress={() => Alert.alert("About App", "Version: 0.0.1")}
                  >
                      <Text style={{fontSize: 15, color: '#FFF'}}>{title}</Text>
                  </TouchableOpacity>
              );
          }

          function headerLeftButton(navigation : any) : React.JSX.Element {
            return (
                <TouchableOpacity
                onPress={() => navigation.navigate("Transactions")}
                >
                    <Image source={require('../assets/icons/left-arrow.png')} // Adjust the path based on your folder structure
                style={styles.iconstyle} // Apply styles to the image
                >
                </Image>
                </TouchableOpacity>
            );
        }

        //***********************Radio Button Functions**************************** */


        //***************************InputBox********************************** */
          const [inputTxt, setInputTxt] = useState('');
          

    return (

        <NavigationContainer >
          <View style={styles.container}>
              <Stack.Navigator 
              initialRouteName="Transactions"
              // Add common header style to all the screens.
              screenOptions={{
                  headerTitleAlign: 'center',
                  headerTintColor: 'orange',
                  headerStyle: {backgroundColor: "red"},
                  headerTitleStyle: {
                      fontSize: 30,
                      fontFamily: "Times new roman",
                      color: '#FFF',
                  },  
              }}
              >
                                      <Stack.Screen
                                      name="Transactions"
                                      component={Transactions}
                                      // options attribute takes an Object or a function that returns an Object
                                      options={{
                                          title: "Transactions",
                                          headerRight: ()=>headerRightButton("About"),
                                      }}
                                      />

                                      <Stack.Screen
                                      name="AddTransactions"
                                      component={AddTransaction}
                                      options={({ navigation }) => ({
                                        title: 'AddTransactions',
                                        headerLeft: () => headerLeftButton(navigation),
                                      })}
                                      // You can set initial paramters in route object.
                                      //initialParams={{id: -1, desc: "default description"}}
                                      // using a function to set Options 
                                      />


              </Stack.Navigator>
              </View>
      </NavigationContainer>
            

    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,

    },
    item: {
        
    },
    iconstyle: {
      width: 40,  // Set the width of the image
      height: 40, // Set the height of the image
      },
  }) 

export default Main;