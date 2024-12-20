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
    TextInput
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
    function EditTransaction({ navigation, route }: {navigation: any , route: any}) : React.JSX.Element {

    // to destructure parameters from route.
    //const {array1, setarray1} = route.params;

    const { id: idProp, title: titleProp, description: descriptionProp, amount: amountProp, radioType: radioTypeProp } = route.params;

    //***************************use Effect To update Fields to Cards Values********************************** */


    //***************************Get Transaction array from Context Provider********************************** */
    const { Array1, setArray1 } = useArray1();
    

    function checkarray () {
        console.log(Array1);
        console.log('the radio type currently is:' + radioType);
    }


    //***************************InputBox states + radio button state and error reset********************************** */
        const [inputTxtTitle, setInputTxtTitle] = useState(titleProp);
        const [inputTxtDescription, setInputTxtDescription] = useState(descriptionProp);
        const [inputTxtCost, setInputTxtCost] = useState(amountProp);

        const [radioType, setradioType] = useState(radioTypeProp);


        function inputsetter1 (newTxtTitle : string) {
            setInputTxtTitle(newTxtTitle)
            if (newTxtTitle != ''){
            seterrorCheckTitle(false)
            }
            else {
                seterrorCheckTitle(true)
            }
            
        }
        function inputsetter2 (newTxtDescription :  string) {
            setInputTxtDescription(newTxtDescription)
            if (newTxtDescription != ''){
                seterrorCheckDescription(false)
            }
            else {
                seterrorCheckDescription(true)
            }
            
        }
        function inputsetter3 (newTxtCost : string) {
            const numericText = newTxtCost.replace(/[^0-9]/g, "");
            setInputTxtCost(numericText)
            if (newTxtCost != ''){
                seterrorCheckAmount(false)
            }
            else {
                seterrorCheckAmount(true)
            }
            
            
        }

//***************************UseState for Error Message and conditional Render********************************** */
        const [errorCheckTitle,seterrorCheckTitle] = useState(false);
        const [errorCheckDescription,seterrorCheckDescription] = useState(false);
        const [errorCheckAmount,seterrorCheckAmount] = useState(false);


//***************************Functions to edit a transaction********************************** */
type objArray1Type = {
    id: number;
    title: string;
    description: string;
    amount: string;
    radioType: string;
  };
    /**
     * Add a new entry in TRANSACTION_DATA array if it is not present. Update the entry if it is already present.
     * @param entry TransactionEntry object. 
     */
    function addEditTransaction(entry : objArray1Type) {
        const currIdx = getIndex(entry);
        if(currIdx != -1) {
            Array1.splice(currIdx,1);
        }
        Array1.push(entry);
    }

    /**
     * Returns the index of TransactionEntry in TRANSACTION_DATA or -1 if entry is not present.
     * @param entry TransactionEntry object to search in the dataset. To find the entry in dataset, id is used.
     * @returns index of the entry in the dataset, -1 if the entry is not present.
     */
    function getIndex(entry : objArray1Type) : number{
        for(let i = 0; i<Array1.length; i++) {
            if(Array1[i].id === entry.id)
                return i;
        }
        return -1;
    }



        

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
            id: idProp,
            title: inputTxtTitle,
            description: inputTxtDescription,
            amount: inputTxtCost,
            radioType: radioType,
            
        }

        addEditTransaction(newObj)

        setArray1([...Array1])
        //will not show the new array because react btaches state changes, so instead we use a useeffect below to see the new objects being added.
        //console.log(Array1)
        navigation.navigate('Transactions');
        }
    }


        
    

    return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                <InputBox inputTxt={inputTxtTitle} setInputTxt={inputsetter1} inputAreaLines={1} placeholderword="Title different"></InputBox>
                   {errorCheckTitle ? <Text style={styles.errormsg} >Title Cannot be Empty</Text> : null } 

                <InputBox inputTxt={inputTxtDescription} setInputTxt={inputsetter2} inputAreaLines={4} placeholderword="Add Some Description..."></InputBox>
                {errorCheckDescription ? <Text style={styles.errormsg} >Description Cannot Be Empty</Text> : null }

                <InputBox inputTxt={inputTxtCost} setInputTxt={inputsetter3} inputAreaLines={1} placeholderword="Amount in CAD.. diffenret" inputType="numeric"></InputBox>
                {errorCheckAmount ? <Text style={styles.errormsg} >Amount Cannot Be Empty</Text> : null }

                </View>
                <View style={styles.radiocomp}>
                <RadioButtons radioType={radioType} setradioType={setradioType}></RadioButtons>
                </View>
                <Pressable style={styles.submitButton} onPress={submitTransaction}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </Pressable>
                {/**<Pressable style={styles.submitButton} onPress={checkarray}>
                    <Text style={styles.submitButtonText}>ehck array 1</Text>
                </Pressable>*/}
                

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
    },
    radiocomp: {
        marginTop:15,
        marginLeft:50,
        marginBottom: 15,

    }

  }) 

export default EditTransaction;