import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput, KeyboardAvoidingView,Keyboard } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5

import ProfileScreen from './Profile';
import MashScreen from './Mash';
import ResultsScreen from './Results';
import LoveInterestScreen from './LoveInterest';
import No_KidsScreen from './NoKids';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class Money_In_BankScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {m1: '', m2: '', m3: ''};
  }

  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  validateAndNavigate = () => {

  //console.log("Let's validate & navigate!");
  if(this.state.m1 != '' && this.state.m2 != '' && this.state.m3 != ''){
   this.props.navigation.navigate('Type_Pet', {
          profile: this.props.navigation.getParam('profile', 'default profile'),
          love_interest: this.props.navigation.getParam('love_interest','def love_interest'),
          cities: this.props.navigation.getParam('cities','def cities'),
          no_kids: this.props.navigation.getParam('no_kids','def no_kids'),
          professions: this.props.navigation.getParam('professions','def professions'),
          vehicles: this.props.navigation.getParam('vehicles','def vehicles'),
          money_in_bank: {
          m1: this.state.m1,
          m2: this.state.m2,
          m3: this.state.m3,
        },
          })
  }
  else{
    alert("Please fill in all values");
  }
  Keyboard.dismiss();
  }
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    //console.log("in money in bank");
    //  console.log(this.props.navigation.state.params);
    return (
      <View style={styles.parentViewStyling}>

 <Text style={styles.questionStyling}>How much money you got in the bank, mon?</Text>

   <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
           <Image
         style={{flex:2, height: undefined, width: undefined}}
         source={require('../images/money.png')}
         resizeMode="contain"
       />
   </Animatable.View>

      <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
      <TextInput
         style={{height: 40}}
         keyboardType='numeric'
         placeholder="I'm rolling in the dough, mon"
         underlineColorAndroid="#33afc3"
         onChangeText={(m1) => this.setState({m1})}
       />
       <TextInput
          style={{height: 40}}
          keyboardType='numeric'
          placeholder="I could afford things"
          underlineColorAndroid="#33afc3"
          onChangeText={(m2) => this.setState({m2})}
        />
        <TextInput
           style={{height: 40}}
           keyboardType='numeric'
           placeholder="My bank account could use a couple of extra 0's"
            underlineColorAndroid="#33afc3"
           onChangeText={(m3) => this.setState({m3})}
         />
         </KeyboardAvoidingView>

         <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
      <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
      </Animatable.View>
   </View>
    );
  }
}
