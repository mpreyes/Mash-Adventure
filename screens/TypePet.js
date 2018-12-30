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

export default class Type_PetScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pe1: '', pe2: '', pe3: ''};
  }

  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  validateAndNavigate = () => {

  //console.log("Let's validate & navigate!");
  if(this.state.pe1 != '' && this.state.pe2 != '' && this.state.pe3 != ''){
   this.props.navigation.navigate('MashQuizNumber', {
          profile: this.props.navigation.getParam('profile', 'default profile'),
          love_interest: this.props.navigation.getParam('love_interest','def love_interest'),
          cities: this.props.navigation.getParam('cities','def cities'),
          no_kids: this.props.navigation.getParam('no_kids','def no_kids'),
          professions: this.props.navigation.getParam('professions','def professions'),
          vehicles: this.props.navigation.getParam('vehicles','def vehicles'),
          money_in_bank: this.props.navigation.getParam('money_in_bank','def money_in_bank'),
          type_pet: {
          pe1: this.state.pe1,
          pe2: this.state.pe2,
          pe3: this.state.pe3,
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
    //console.log("in type pet");
      console.log(this.props.navigation.state.params);
    return (
      <View style={styles.parentViewStyling}>

 <Text style={styles.questionStyling}>Choose three pets/animals</Text>

   <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
           <Image
         style={{flex:2, height: undefined, width: undefined}}
         source={require('../images/pets.png')}
         resizeMode="contain"
       />
   </Animatable.View>

      <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
      <TextInput
         style={{height: 40}}
         placeholder="Gr8 pet"
          underlineColorAndroid="#33afc3"
         onChangeText={(pe1) => this.setState({pe1})}
       />
       <TextInput
          style={{height: 40}}
          placeholder="Eh pet"
           underlineColorAndroid="#33afc3"
          onChangeText={(pe2) => this.setState({pe2})}
        />
        <TextInput
           style={{height: 40}}
           placeholder="Naw M8"
            underlineColorAndroid="#33afc3"
           onChangeText={(pe3) => this.setState({pe3})}
         />
         </KeyboardAvoidingView>

      <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
   <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
   </Animatable.View>
   </View>
    );
  }
}
