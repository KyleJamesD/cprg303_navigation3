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
  import { useArray1 } from "../Main";
import { useEffect } from "react";
  import RadioButtons from "./RadioButtons";
  import InputBox from "./InputBox";

  type objArray1Type = {
    id: number;
    title: string;
    description: string;
    amount: string;
    radioType: string;
  };


    // must define the type of object (and we would just use any type which is probably not good practice)coming from route if you are passing something
    //unfortunately we cannot pass usestate hooks setter function
    //function AddTransaction({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {
    function AddTransaction({ navigation }: {navigation: any}) : React.JSX.Element {

    // to destructure parameters from route.
    //const {array1, setarray1} = route.params;

    

    //***************************Get Transaction array from Context Provider********************************** */
    const { Array1, setArray1 } = useArray1();

    let nextId = Array1.length;

    function checkarray () {
        console.log(Array1);
        console.log('the radio type currently is:' + radioType);
    }


    //***************************InputBox states + radio button state and error reset********************************** */
        const [inputTxtTitle, setInputTxtTitle] = useState('');
        const [inputTxtDescription, setInputTxtDescription] = useState('');
        const [inputTxtCost, setInputTxtCost] = useState('');

        const [radioType, setradioType] = useState('0');


        function inputsetter1 (newTxtTitle : string) {
            setInputTxtTitle(newTxtTitle)
            seterrorCheckTitle(false)
        }
        function inputsetter2 (newTxtDescription :  string) {
            setInputTxtDescription(newTxtDescription)
            seterrorCheckDescription(false)
        }
        function inputsetter3 (newTxtCost : string) {
            const numericText = newTxtCost.replace(/[^0-9]/g, "");
            setInputTxtCost(numericText)
            seterrorCheckAmount(false)
        }

//***************************UseState for Error Message and conditional Render********************************** */
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
            if(inputTxtTitle !== '' && inputTxtDescription !== '' && inputTxtCost !== '' ) {
                console.log(inputTxtTitle )
                console.log( inputTxtDescription)
                console.log( inputTxtCost)

            const newObj : objArray1Type = {
                id: nextId++,
                title: inputTxtTitle,
                description: inputTxtDescription,
                amount: inputTxtCost,
                radioType: radioType,
                
            }
            setArray1([...Array1,newObj])
            //will not show the new array because react btaches state changes, so instead we use a useeffect below to see the new objects being added.
            //console.log(Array1)
            navigation.navigate('Transactions');



            }
        }


        useEffect(() => {
            console.log('Updated Array1:', Array1);
          }, [Array1]);
        


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
                <RadioButtons radioType={'0'} setradioType={setradioType}></RadioButtons>

                <Pressable style={styles.submitButton} onPress={submitTransaction}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </Pressable>
                <Pressable style={styles.submitButton} onPress={checkarray}>
                    <Text style={styles.submitButtonText}>ehck array 1</Text>
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