import React, { useState , useEffect } from "react";
import Forecast from "./Forecast";
import { ImageBackground, StatusBar, StyleSheet, Text , View } from "react-native";

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=cfee5859532d1c7d55b6f47165b32dad`)
                .then((response) => response.json())
                .then((json) => {
                     setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        min: json.main.temp_min,
                        max: json.main.temp_max,
                        wind_speed: json.wind.speed,
                        time : json.timezone
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../Blackground.jpg')} style={styles.backdrop}>
                <Text style={styles.Text}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    Text: {
        fontSize: 20 ,
        textAlign: 'center'
    }
}); 