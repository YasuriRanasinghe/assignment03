import React,{Component} from 'react';
import {Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import ScreenOne from './ScreenOne';
import {useNavigation} from '@react-navigation/native';

const MovieBox = ({title, poster_path, overview}) => {
    const navigation  = useNavigation();
        return(
            <ScrollView>
                
                <TouchableOpacity>
                    onPress={() => {navigation.navigate('ScreenOne'); }}
                    style = {styles.appButtonContainer}>
                        <Text style={styles.Title}>{title}</Text>
                </TouchableOpacity>

                <Image style = {{width:100, height:150, margin: 8, alignSelf: 'center'}}
                source= {{uri: 'https://image.tmdb.org/t/p/w500//' + poster_path}} />

                <Text style= {style.textStyle}>{overview}</Text>
            
            </ScrollView>
        );
}

export default MovieBox;

const styles = StyleSheet.create({
    textStyle:{
        fontSize:10,
        color: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
    },
    Title: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
       
    },
})