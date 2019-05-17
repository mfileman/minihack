import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Torch from 'react-native-torch';
//import console = require('console');
 


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: 'input your msg here', 
      array: {}, 
      alphabet: 'abcdefghijklmnopqrstuvwxyz '.split(""),
      morseCode: ".- / -... / -.-. / -.. / . / ..-. / --. / .... / .. /.--- / -.- / .-.. / -- / -. / --- / .--. / --.- / .-. / ... / - / ..- / ...- / .-- / -..- / -.-- / --.. / | ".split("/") ,
      morseMsg: "morse code will b here",
      color: '#dd969d'
    }
  }

  style(){
    return {
      backgroundColor: this.state.color,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  }

  handleClick() {
    this.state.array = this.state.text.split("");    //works to make it an array!
    this.morseIt(this.state.array[0])
  }

  morseIt(l){
    this.setState({ morseMsg: this.state.array.map((l) => this.state.morseCode[this.state.alphabet.indexOf(l)] ) });
    console.log(this.state.morseMsg) //works!
  }

  

  lightIt(l){
    if(l == '.'){
      
      setTimeout(this.setState({color: '#fff'}), 1000)
      setTimeout(this.setState({color: '#000'}), 1000)
      
    }

    else if(l == '-'){
      this.setState({color: '#fff'})
      sleep(3)
      this.setState({color: '#000'})
    }
  }


  
  

  render() {
    //Torch.switchState(true); // Turn ON
    return (
      <View style={this.style()}>
        <TextInput
        style={{ width: 400, borderColor: 'lightgray', borderWidth: 1, textAlign: "center", color: '#000'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Button 
        onPress = {() => this.handleClick() }
        title="morse it">
        </Button>

        <Text style={{width: 400, borderColor: 'lightgray', borderWidth: 1, textAlign: "center"}}>
        {this.state.morseMsg}
        </Text>

        <Button 
        onPress = {() => this.lightIt('.') }
        title="light it">
        </Button>
      </View>
      
    );
  }
}
