import React , {Component} from 'react';
import {Text ,StyleSheet ,View } from 'react-native';

class Header extends Component{
render(){
    return(
        <View style={styles.header}>
<Text>{this.props.title}</Text>
        </View>
    
    )
}
}

const styles = StyleSheet.create({
header:{
backgroundColor:'#efefef',
alignItems:'center',
justifyContent:'center',
height:80

}
})

export default Header;