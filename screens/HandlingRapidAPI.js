import React, { useState , useEffect } from 'react'
import { StyleSheet, Text, View , TextInput } from 'react-native'
import axios from 'axios';

const HandlingRapidAPI = () => {

    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')
    const [data, setData] = useState([])
    const [lat, setLat] = useState(28.6280)
    const [lng, setLng] = useState(77.3649)


    useEffect(()=>{
            restaurantsApiCall();
    } , [])

    let restaurantsApiCall = async()=>{
        // let lat = 28.6280;
        // let lng = 77.3649;
        console.log("lat:" , lat);
        console.log("lng:" , lng);
        try{
            let response = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lng}`,{
                headers: {
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'x-rapidapi-key': '8dedc09fa7msh378ca98ae765a1dp1cc83cjsn58584d832b75'
                    }
                }
            )
            setLoading(false);
            setData(response.data.data);
            console.log(response.data.data);
        }catch(err){
            setErr(err.message)
            setLoading(false);
        }
    }

    return (
        <View  style={styles.container}>
        <TextInput 
         placeholder = "enter latitude"
         onChangeText={text =>setLat(text)}
        />
        <TextInput 
         placeholder = "enter longitude"
         onChangeText={text =>setLng(text)}
        />
        {
            data.slice(0,10).map((item , idx)=>(
                <Text key={idx}>{item.name}
                {/*item.location_id*/}
                </Text>
            ))
        }
        </View>
    )
}

export default HandlingRapidAPI

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
})
