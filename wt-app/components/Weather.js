import React, { useState } from "react";
import Forecast from "./Forcast";
import { ImageBackground, StyleSheet, Text , View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../Background.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}  

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',

    
    },
}); 