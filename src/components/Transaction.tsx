import React from "react";
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

  function Transactions({navigation} : {navigation : any}) : React.JSX.Element {

    function plusButtonPress () {
      console.log ('Pressed the plus button')
      navigation.navigate("AddTransactions");
    }



    return (
        <View>
            <View>
              <Text>This is the Main page to see Transactions</Text>
            </View>
            <Pressable onPress={plusButtonPress}>
                <Image source={require('../../assets/icons/plus.png')} // Adjust the path based on your folder structure
                style={styles.iconstyle} // Apply styles to the image
                >
                </Image>
            </Pressable>
        </View>

    );
  }

  const styles = StyleSheet.create({
    container:{

    },
    iconstyle: {
      width: 50,  // Set the width of the image
      height: 50, // Set the height of the image
      },
  }) 

export default Transactions;