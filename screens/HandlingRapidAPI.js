import React, { useState , useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

const HandlingRapidAPI = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        let lat = 28.6280;
        let lng = 77.3649;
       var options = {
            method: 'GET',
            url:`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lng}`,
            // url: `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`,
            // params: {
            //     latitude: '28.6280',
            //     longitude: '77.3649',
            // },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '8dedc09fa7msh378ca98ae765a1dp1cc83cjsn58584d832b75'
            }
            };

            axios.request(options).then(function (response) {
                // console.log(response.data.data[0].name +"23");
                // console.log(response.data);
                setData(response.data.data)
            }).catch(function (error) {
                console.error(error);
            });
    },[])

    return (
        <View  style={styles.container}>
        {
            data.map((item , idx)=>(
                <Text key={idx}>{item.name}{item.location_id}</Text>
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
