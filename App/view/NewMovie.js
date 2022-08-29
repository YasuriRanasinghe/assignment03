import React,{Component, useEffect, useState} from "react";
import {View,Text,StyleSheet, FlatList, ScrollView} from "react-native";
import MovieBox from "./MovieBox";


const API_URL='https://api.themoviedb.org/3/movie/550?api_key=158cebff5ecaa628c35835b616148c76'
function App(){
    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {
        fetch(API_URL)
        .then((res) => res.json())
        .then(data =>{
            console.log(data);
            setMovies(data.results);
        })
    }, [])
        
    return(
        <ScrollView>
            {movies.map((movieReq)=> 
            <MovieBox key={movieReq.id}{...movieReq}/>)}
        </ScrollView>

            
    );
}

export default App;

const styles = StyleSheet.create({
    conatin: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    textStyle:{
        fontSize: 35,
        color: '#3333333',
    },
})