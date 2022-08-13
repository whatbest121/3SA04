import React from "react"
import { FlatList, Text, TouchableHighlight, View } from "react-native"
import { useNavigation } from "@react-navigation/core"
import {StyleSheet}  from 'react-native'
import { StatusBar } from "expo-status-bar";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress= {() => {navigation.navigate('Weather', {zipCode: code})}} >
    <View style={styles.zipItem}>
    <Text>{place}</Text>
    <Text>{code}</Text>
    </View>
    </TouchableHighlight>
    )
   const _keyExtractor = item => item.code
   export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View >
        <FlatList style={styles.Text2}
            data={availableZipItems}
            keyExtractor={_keyExtractor}
            renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        <StatusBar style="auto" />
    </View>
);
}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,

    },
    zipPlace : {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    Text: {
     fontSize: 20 ,
     textAlign: 'center',
     paddingTop: 20,
     color: 'blue' 
 }
})