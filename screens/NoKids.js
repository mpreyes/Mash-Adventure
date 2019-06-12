import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput,KeyboardAvoidingView,Keyboard } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5

import ProfileScreen from './Profile';
import MashScreen from './Mash';
import ResultsScreen from './Results';
import LoveInterestScreen from './LoveInterest';
import CitiesScreen from './Cities';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class No_KidsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {n1: '', n2: '', n3: ''};
  }
  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  validateAndNavigate = () => {

//  console.log("Let's validate & navigate!");
  if(this.state.n1 != '' && this.state.n2 != '' && this.state.n3 != ''){
   this.props.navigation.navigate('Professions', {
          profile: this.props.navigation.getParam('profile', 'default profile'),
          love_interest: this.props.navigation.getParam('love_interest','def love_interest'),
          cities: this.props.navigation.getParam('cities','def cities'),
          no_kids: {
         n1: this.state.n1,
         n2: this.state.n2,
         n3: this.state.n3,
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
    return (
      <View style={styles.parentViewStyling}>

 <Text style={styles.questionStyling}>How many kids would you want?</Text>

   <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
           <Image
         style={{flex:2, height: undefined, width: undefined}}
         source={require('../images/kids.png')}
         resizeMode="contain"
       />
   </Animatable.View>
      <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
      <TextInput
         style={{height: 40}}
         keyboardType='numeric'
         underlineColorAndroid="#33afc3"
         placeholder="Ideal number of kids"
         onChangeText={(n1) => this.setState({n1})}
       />
       <TextInput
          style={{height: 40}}
          keyboardType='numeric'
          underlineColorAndroid="#33afc3"
          placeholder="Manageable"
          onChangeText={(n2) => this.setState({n2})}
        />
        <TextInput
           style={{height: 40}}
           keyboardType='numeric'
           underlineColorAndroid="#33afc3"
           placeholder="No, thanks."
           onChangeText={(n3) => this.setState({n3})}
         />
         </KeyboardAvoidingView>

         <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
      <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
      </Animatable.View>
   </View>
    );
  }
}
