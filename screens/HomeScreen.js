import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import {auth} from '../firebase'

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = ()=>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace("login")
        })
        .catch(err => alert(err.message))
    }
    return (
        <View style={styles.container}>
           <Text>Welcome Back:{auth.currentUser?.email}</Text>
           <TouchableOpacity 
           style = {styles.button}
           onPress = {handleSignOut}
           >
                <Text style = {styles.buttonText}>Sign Out</Text>
           </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    } ,
      button:{
        backgroundColor:"#0782F9",
        width:"60%",
        padding:15,
        borderRadius:10,
        alignItems:"center",
        marginTop:40,
    },
    buttonText:{
        color:"white",
        fontWeight:'700',
        fontSize:16
    },

})
