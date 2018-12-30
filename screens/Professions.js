import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput,KeyboardAvoidingView,Keyboard } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5

import ProfileScreen from './Profile';
import MashScreen from './Mash';
import ResultsScreen from './Results';
import LoveInterestScreen from './LoveInterest';
import No_KidsScreen from './NoKids';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class ProfessionsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pr1: '', pr2: '', pr3: ''};
  }

  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  validateAndNavigate = () => {

  //console.log("Let's validate & navigate!");
  if(this.state.pr1 != '' && this.state.pr2 != '' && this.state.pr3 != ''){
   this.props.navigation.navigate('Transportation', {
          profile: this.props.navigation.getParam('profile', 'default profile'),
          love_interest: this.props.navigation.getParam('love_interest','def love_interest'),
          cities: this.props.navigation.getParam('cities','def cities'),
          no_kids: this.props.navigation.getParam('no_kids','def no_kids'),
          professions: {
          pr1: this.state.pr1,
          pr2: this.state.pr2,
          pr3: this.state.pr3,
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
    //console.log("in professions");
  //  console.log( this.props.navigation.state.params);
    return (
      <View style={styles.parentViewStyling}>

 <Text style={styles.questionStyling}>Choose three occupations</Text>

   <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
           <Image
         style={{flex:2, height: undefined, width: undefined}}
         source={require('../images/professions.png')}
         resizeMode="contain"
       />
   </Animatable.View>

      <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
      <TextInput
         style={{height: 40}}
         placeholder="Dream career, hands down"
         underlineColorAndroid="#33afc3"
         onChangeText={(pr1) => this.setState({pr1})}
       />
       <TextInput
          style={{height: 40}}
          placeholder="I could get through it"
          underlineColorAndroid="#33afc3"
          onChangeText={(pr2) => this.setState({pr2})}
        />
        <TextInput
           style={{height: 40}}
           placeholder="Worst job, please let me retire ASAP"
           underlineColorAndroid="#33afc3"
           onChangeText={(pr3) => this.setState({pr3})}
         />
         </KeyboardAvoidingView>

         <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
      <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
      </Animatable.View>
   </View>
    );
  }
}
