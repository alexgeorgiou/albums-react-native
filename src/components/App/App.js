import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Input from '../Input';

const App = () => {
    return (
        <View style={ styles.container }>
            <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
                <View style={{ width: '100%', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                    <Input onChange={(e) => console.log(e.target.value)} placeholder="username"/>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
        justifyContent: 'center'
    },
    background: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default App;
