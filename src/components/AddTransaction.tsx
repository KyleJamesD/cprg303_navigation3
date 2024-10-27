import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  import { useState } from "react";

  import RadioButtons from "./RadioButtons";
  import InputBox from "./InputBox";

  type InputBoxProps = {
    inputTxt: string;
    setInputTxt: (text: string) => void;
    inputAreaHeight: number;
    placeholderword: string;
};



  function AddTransaction({navigation} : {navigation : any}) : React.JSX.Element {

    //***************************InputBox********************************** */
        const [inputTxtTitle, setInputTxtTitle] = useState('');
        const [inputTxtDescription, setInputTxtDescription] = useState('');
        const [inputTxtCost, setInputTxtCost] = useState('');
        


    return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                <InputBox inputTxt={inputTxtTitle} setInputTxt={setInputTxtTitle} inputAreaLines={1} placeholderword="Title"></InputBox>
                <InputBox inputTxt={inputTxtDescription} setInputTxt={setInputTxtDescription} inputAreaLines={4} placeholderword="Add Some Description..."></InputBox>
                <InputBox inputTxt={inputTxtCost} setInputTxt={setInputTxtCost} inputAreaLines={1} placeholderword="0"></InputBox>
                
                </View>
                <RadioButtons></RadioButtons>

            </View>

    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inputContainer:{
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    item: {
        
    },
  }) 

export default AddTransaction;