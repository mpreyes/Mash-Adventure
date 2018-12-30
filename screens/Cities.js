import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput,KeyboardAvoidingView, Keyboard } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5

import ProfileScreen from './Profile';
import MashScreen from './Mash';
import ResultsScreen from './Results';
import LoveInterestScreen from './LoveInterest';
import No_KidsScreen from './NoKids';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';



export default class CitiesScreen extends React.Component {
  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  constructor(props) {
    super(props);
    this.state = {c1: '', c2: '', c3: ''};
  }
  validateAndNavigate = () => {

  //console.log("Let's validate & navigate!");
  if(this.state.c1 != '' && this.state.c2 != '' && this.state.c3 != ''){
   this.props.navigation.navigate('No_Kids', {
          profile: this.props.navigation.getParam('profile', 'default profile'),
          love_interest: this.props.navigation.getParam('love_interest','def love_interest'),
          cities:{
           c1: this.state.c1,
            c2: this.state.c2,
          c3: this.state.c3,
          }
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
    const profile = navigation.getParam('profile','def profile');
    const love_interest = navigation.getParam('love_interest','def love_interest');

  //  console.log("In cities");
  //console.log( this.props.navigation.state.params);
     return (

         <View style={styles.parentViewStyling}>

    <Text style={styles.questionStyling}>Choose three locations </Text>

      <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
              <Image
            style={{flex:2, height: undefined, width: undefined}}
            source={require('../images/cities.png')}
            resizeMode="contain"
          />
      </Animatable.View>

         <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
         <TextInput
            style={{height: 40}}
            placeholder="Best location"
             underlineColorAndroid="#33afc3"
            onChangeText={(c1) => this.setState({c1})}
          />
          <TextInput
             style={{height: 40}}
             placeholder="'Meh' location"
              underlineColorAndroid="#33afc3"
             onChangeText={(c2) => this.setState({c2})}
           />
           <TextInput
              style={{height: 40}}
              placeholder="WORST, I would never live here location"
               underlineColorAndroid="#33afc3"
              onChangeText={(c3) => this.setState({c3})}
            />
            </KeyboardAvoidingView>

            <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
         <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
         </Animatable.View>
      </View>
    );
  }
}
