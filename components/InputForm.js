import React from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, Platform } from 'react-native';

const InputForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={Inputstyles.addFormContainer}>
        <TextInput 
            style={Inputstyles.inputFiled}
            placeholder="할 일을 작성해주세요."
        />
        <Pressable style={Inputstyles.addButton}>
            <Text style={Inputstyles.addButtonText}>+</Text>
        </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const Inputstyles = StyleSheet.create({
    addFormContainer:{
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f7f8fa'
    },
    inputFiled:{
        flex: 1,
        height: 40,
        padding: 5,
        marginRight: 25,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        color: '#000000',
        fontSize: 15,
        textAlignVertical: 'center'
    },
    addButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    addButtonText:{
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '600'
    }

});
