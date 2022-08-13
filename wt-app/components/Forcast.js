import React from "react";
import { StyleSheet, Text , View } from "react-native";

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.Text} >Main</Text>
            <Text style={styles.Text2} >{props.description}</Text>
            <View>
                <Text style={styles.Text1} >{props.temp}  °C</Text>
                <Text style={styles.Text2} >Temp min is</Text>
                <Text style={styles.Text1} >{props.min}  °C</Text>
                <Text style={styles.Text2} >Temp max is</Text>
                <Text style={styles.Text1} >{props.max}  °C</Text>
                <Text style={styles.Text3} >Wind speed is {props.wind_speed}</Text>
                <Text style={styles.Text2} >Pressure is {props.pressure}</Text>
                <Text style={styles.Text2} >Temp feel like is  {props.feel}  °C</Text>
             </View>
        </View>
    );
   } 
   const styles = StyleSheet.create({
    Text: {
        fontSize: 15 ,
        textAlign: 'center' ,
        paddingTop: 10,
        color: 'green'
    },

    Text2: {
        fontSize: 15 ,
        textAlign: 'center',
        paddingTop: 10,
        color: 'blue' 
    },

    Text1: {
        fontSize: 25 ,
        color: 'red' ,
        textAlign: 'center',
        paddingTop: 20
    },
    Text3: {
        fontSize: 25 ,
        color: 'orange' ,
        textAlign: 'center',
        paddingTop: 10
    }
}) 