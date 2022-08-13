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
             </View>
        </View>
    );
   } 
   const styles = StyleSheet.create({
    Text: {
        fontSize: 30 ,
        textAlign: 'center' ,
        paddingTop: 20,
        color: 'green'
    },

    Text2: {
        fontSize: 20 ,
        textAlign: 'center',
        paddingTop: 20,
        color: 'blue' 
    },

    Text1: {
        fontSize: 30 ,
        color: 'red' ,
        textAlign: 'center',
        paddingTop: 20
    }
}) 