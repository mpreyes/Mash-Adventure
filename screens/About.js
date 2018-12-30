import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput,KeyboardAvoidingView,TouchableHighlight, Linking, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5

import MashScreen from './Mash';
import ResultsScreen from './Results';
import LoveInterestScreen from './LoveInterest';
import CitiesScreen from './Cities';
import No_KidsScreen from './NoKids';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';
import { material } from 'react-native-typography';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  constructor(props) {
    super(props);
  }


  render() {
    const { navigate } = this.props.navigation;

    return (

        <View style={styles.parentViewStyling}>
         <ScrollView style={styles.textStyling}>
        <Animatable.Text animation="lightSpeedIn" style={[material.display2]}>About Adventure M.A.S.H.</Animatable.Text>


          <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
       <Text style={material.title}> The idea for adventure M.A.S.H.</Text>
     {'\t'} came to me after a few nights of nothing to do due to being bedridden after an unfortunate accident. 
     Most of those days were spent writing the logic for the actual quiz portion of the game, writing stories, and cobbling pictures together to bring
     you what I finally called Adventure M.A.S.H.  
   </Animatable.Text>

      <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
      {'\t'} As a little girl in the 6th grade, I loved grabbing a piece of paper
     and pencil and getting together with my friends to play the traditional version of M.A.S.H. 
     I would come up with ridiculous stories to serve as background for their fortunes, and the idea to add an 
     element of storytelling stuck with me. This game combines my all my favorite childhood pastimes: M.A.S.H., 
      choose your own adventure books, and good old fancfiction. There are ten possible endings in this first version. If 
      enough people like it, I'm definitely up for writing more. {'\n'}

     </Animatable.Text>
     
     <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
     {'\t'} I hope this is as fun to play as it was to create. If you want to find me,
    
   head over to my website, <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://mpreyes.github.io')}>mpreyes.github.io</Text>,
  or hit me up on Instagram, <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.instagram.com/mpreyes09/')}>mpreyes09</Text>.  {'\n'}

       </Animatable.Text>

          <Text>Thanks to
                    <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.vecteezy.com')}> Vecteezy</Text> for allowing me to mutilate your images.  {'\n'}
          </Text>

        <View style={styles.buttonSoloStyling}>
          <Button title="Home" color="#4e91d3" onPress={() =>  navigate('Home') }/>
          </View>
      </ScrollView>
      </View>
    );
  }
}
