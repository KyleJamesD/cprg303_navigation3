import React, { useState } from "react";
import { 
    Button,
    Clipboard,
    StyleSheet,
    TextInput,
    View,
 } from "react-native";



 type InputBoxProps = {
    inputTxt: string;
    setInputTxt: (text: string) => void;
    inputAreaLines: number;
    placeholderword: string;
};


 function InputBox(props : InputBoxProps) : React.JSX.Element {

    let inputTxt = props.inputTxt
    let setInputTxt = props.setInputTxt;
    let inputAreaLines = props.inputAreaLines;
    let placeholderWord = props.placeholderword;

    

    function handleInput(newTxt : string) {
            setInputTxt(newTxt);
            console.log(newTxt);
    }


return (
    <View style={[styles.inputArea]}>
    <TextInput
    style={styles.inputField}
    placeholder={placeholderWord}
    value={inputTxt}
    onChangeText={handleInput}
    numberOfLines={inputAreaLines}
    />
    </View>
    );
 }

 const styles = StyleSheet.create(
    {
        inputArea: {
            width: '100%',
            marginTop: 30,
            
        },
        inputField: {
            borderWidth: 2,
            borderColor: '#3B3030',
            borderRadius: 10,
            fontWeight: '400',
            fontSize: 20,
            backgroundColor: '#FFF',
        },
    }
);


export default InputBox;