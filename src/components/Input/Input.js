import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ onChange, placeholder }) => {
    const { container, inputStyle } = styles;

    return (
        <View style={ container }>
            <TextInput
                onChange={ onChange }
                placeholder={ placeholder }
                autoCorrect={ false }
                autoCapitalize={ false }
                style={ inputStyle }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        borderWidth: 2,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        borderColor: '#10236d',
        borderRadius: 20,
        backgroundColor: '#fff',
        color: '#10236D'
    }
});

export default Input;
