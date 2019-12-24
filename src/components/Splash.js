import React , {Component} from 'react';
import {ActivityIndicator,View,StyleSheet} from 'react-native';

class Splash extends Component{
    render(){
        return(
     
            <View styles={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:'center',
            backgroundColor:'#2c3e50'

        }
})

export default Splash;