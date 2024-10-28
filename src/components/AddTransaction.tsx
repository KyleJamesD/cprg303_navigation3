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
    Pressable
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



        function inputsetter1 (newTxtTitle : string) {
            setInputTxtTitle(newTxtTitle)
            seterrorCheckTitle(false)
        }
        function inputsetter2 (newTxtDescription :  string) {
            setInputTxtDescription(newTxtDescription)
            seterrorCheckDescription(false)
        }
        function inputsetter3 (newTxtCost : string) {
            setInputTxtCost(newTxtCost)
            seterrorCheckAmount(false)
        }

//***************************UseState for Error Message conditional Render********************************** */
        const [errorCheckTitle,seterrorCheckTitle] = useState(false);
        const [errorCheckDescription,seterrorCheckDescription] = useState(false);
        const [errorCheckAmount,seterrorCheckAmount] = useState(false);
        

        function submitTransaction () {
            if (inputTxtTitle == ''){
                seterrorCheckTitle(true);
            }
            if (inputTxtDescription == ''){
                seterrorCheckDescription(true);
            }
            if (inputTxtCost == ''){
                seterrorCheckAmount(true);
            }
            else {
                console.log(inputTxtTitle )
                console.log( inputTxtDescription)
                console.log( inputTxtCost)
            }
        }
        


    return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                <InputBox inputTxt={inputTxtTitle} setInputTxt={inputsetter1} inputAreaLines={1} placeholderword="Title"></InputBox>
                   {errorCheckTitle ? <Text style={styles.errormsg} >Title Cannot be Empty</Text> : null } 

                <InputBox inputTxt={inputTxtDescription} setInputTxt={inputsetter2} inputAreaLines={4} placeholderword="Add Some Description..."></InputBox>
                {errorCheckDescription ? <Text style={styles.errormsg} >Description Cannot Be Empty</Text> : null }

                <InputBox inputTxt={inputTxtCost} setInputTxt={inputsetter3} inputAreaLines={1} placeholderword="Amount in CAD.." inputType="numeric"></InputBox>
                {errorCheckAmount ? <Text style={styles.errormsg} >Amount Cannot Be Empty</Text> : null }



                </View>
                <RadioButtons></RadioButtons>

                <Pressable style={styles.submitButton} onPress={submitTransaction}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </Pressable>

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
    submitButton: {
        backgroundColor: '#37AFE1',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',  // Centers text horizontally
        justifyContent: 'center', // Centers text vertically
        width: '30%',
        alignSelf:'center',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    errormsg: {
        color:'red',
        fontSize: 15,
    }
  }) 

export default AddTransaction;