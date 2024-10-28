import React, { useMemo, useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { StyleSheet } from 'react-native';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  type radioProps = {
    setradioType: (value: string) => void;
  }
  

 function RadioButtons( { setradioType }: radioProps) : React.JSX.Element {



    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '0', // acts as primary key, should be unique and non-empty string
            label: 'Essential',
            value: 'option1',
        },
        {
            id: '1',
            label: 'Leisure',
            value: 'option2'
        },
        {
            id: '2',
            label: 'Others',
            value: 'option3'
        }
    ]
        ), []);

    const [selectedId, setSelectedId] = useState<string >('0');

    //console.log(selectedId)
    //console.log(selectedId);

    function onPressButton (newselectedId : string)  {
        console.log(newselectedId);
        setSelectedId(newselectedId);
        setradioType(newselectedId);
    }

    return (
        <View style={styles.container}>
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressButton}
                selectedId={selectedId}
                containerStyle={styles.radioGroup} // Override container styles here
                labelStyle={styles.radioButton}
            />
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        
    },
    radioGroup: {
        // Additional styles for the RadioGroup can be added here
        alignItems: 'flex-start', // Change to your desired alignment
        justifyContent: 'flex-start',
    },
    labelStyle: {
        fontSize: 18,  // Example font size
        color: 'blue', // Example label color
        // Add other styles as needed
    },
    radioButton: {
        margin: 10,
    },
});

export default RadioButtons;
