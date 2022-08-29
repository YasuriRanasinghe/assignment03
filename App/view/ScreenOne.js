import React,{Component} from "react";
import { View,StyleSheet, Text } from "react-native";

export default class ScreenOne extends Component{
    render(){
        return(
            <View style={styles.conatin}>
                <Text style={styles.textStyle}>Screen One</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatin:{
        flex:1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
})