import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import Header from './app/Header'
import Routes from "./src/Routes";
import RouteNavigation from "./app/RootNavigator";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {calculaters} from './MyFunctions';
class App extends Component {

state = {
  resultText:[],
  opreations:[],
result :""
}


calcResult=()=>{
let text = this.state.resultText;



this.setState({
  result:calculaters(text),
  resultText:""
 
})


} 


  buttonPress =(text)=>{

    if(text == "="){
      return this.calcResult();
    }
    
    
  this.setState({
    resultText:this.state.resultText + text,
  })


} 

buttonOperation = (opreations)=>{


switch(opreations){
  case 'del':
    let text = this.state.resultText.split('');
    text.pop();
  
    this.setState({
      resultText:text.join("")
    })
    break
    case '+':
    let int1 = parseInt(this.state.resultText);
    this.setState({
      int1:int1,
    
    })
    console.log(int1);
    case '-':
    case '/':
    case '*':
      this.setState({
        resultText:this.state.resultText + opreations
      })

}
}
 
 render(){
let rows =[]; 
let nums = [[1,2,3],[4,5,6],[7,8,9],[".",0,"="]];
for(let i =0;i<4;i++){
  let row = [];

  for(let r =0 ; r < 3;r++){
    row.push(  <TouchableOpacity onPress={()=>this.buttonPress(nums[i][r])} style={styles.btn}>
  <Text style={styles.btnText}>{nums[i][r]}</Text>
    </TouchableOpacity >);
  }
    rows.push(<View style={styles.row}>{row}</View>);
} 

let ops = []
let opreations = ['del','+',"-","*","/"];
for (let i = 0; i < 5; i++) {
  ops.push(<TouchableOpacity onPress={()=>this.buttonOperation(opreations[i])} style={styles.btnopts}>
    <Text style={[styles.btnText,styles.white]}>{opreations[i]}</Text>
      </TouchableOpacity >)
  
}

//let numses = this.state.opreations.length > 0 ? this.state.opreations:this.state.numbers;

   return(
    <View style={styles.container}>
       <View style={styles.calculation}>
   <Text style={styles.calculationText}>{this.state.resultText}</Text>

    </View> 
    <View style={styles.result}>
      <Text style={styles.resultText}>{this.state.result}</Text>
    </View>
  
    <View style={styles.buttons}>
    <View style={styles.numbers}>
{rows}
    </View>
    <View style={styles.opreations}>
{ops}
    </View>
    </View>




    </View>
   )
 }

  }

  const styles = StyleSheet.create({
    container:{
      
      flex:1,
      justifyContent:'flex-start'
 },
 white:{
   color:'white',
 
 },
 btn:{
flex:1,
alignItems:'center',
alignSelf:"stretch",
justifyContent:'center'
 },
 btnopts:{
  alignItems:'center',
  alignSelf:"stretch",
  justifyContent:'center'
 },
 calculationText:{
fontSize:30,
color:"#333",


 },
 resultText:{
fontSize:24,
color:"#fff"
 },
 btnText:{
fontSize:30,
 },
 row:{
flexDirection:'row',
flex:1,
justifyContent:'space-around',
alignItems:"center"
 },
 calculation:{
    flex:3,
    backgroundColor:"#fff",
    justifyContent:'center',
    textAlign:'right'

    },
    result:{
       
      flex:1,
      backgroundColor:"gray",
      justifyContent:'center',
     textAlign:'right'

  
    },
    buttons:{
      flexGrow:6,
flexDirection:'row-reverse'
    },
      opreations:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'stretch',
backgroundColor:"black"
    },
    numbers:{
      flex:3,
  backgroundColor:"#fff"  
    },
  
  })
  
  


export default App;