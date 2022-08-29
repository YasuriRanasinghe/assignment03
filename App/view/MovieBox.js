import React, { Component } from "react";
import {Text,StyleSheet,Image, ScrollView,  TouchableOpacity } from "react-native";
import ScreenOne from "./ScreenOne";
import {useNavigation} from '@react-navigation/native';


const API_IMG='https://image.tmdb.org/t/p/w500'
const MovieBox =({title , poster_path,overview})=>{
    
    

    const navigation = useNavigation();
        return(
            <ScrollView>
                
                <TouchableOpacity 
                    onPress={() => {navigation.navigate('ScreenOne');}}
                    style={styles.appButtonContainer}>
                        <Text style={styles.Title}>{title}</Text>
                </TouchableOpacity>
                
                                
                <Image source= {API_IMG}{...poster_path}></Image>
                <Text style={styles.textStyle}>{overview}</Text>
            </ScrollView>
        );
    
}
/*export default class MovieBox extends Component{
    onPress =() =>{
        this.props.navigation.navigate('ScreenOne')
        
    };
    

    render(){
        return(
            <ScrollView>
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate('ScreenOne')}
                    style={styles.appButtonContainer}>
                        <Text style={styles.Title}>{title}</Text>
                </TouchableOpacity>
                
                                
                <Image source= {API_IMG}{...poster_path}></Image>
                <Text style={styles.textStyle}>{overview}</Text>
            </ScrollView>
        );
    }
}
*/

export default MovieBox;

const styles = StyleSheet.create({
    textStyle:{
        fontSize:10,
        color:'#333333',
        alignItems:'center',
        justifyContent:'center',
        textAlign: 'left',
    },
    Title:{
        fontSize: 16,
        color:'#333333',
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
    },
})

