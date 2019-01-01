import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput,KeyboardAvoidingView,TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5
import ProfileScreen from './Profile';
import MashScreen from './Mash';
import ResultsScreen from './Results';
import LoveInterestScreen from './LoveInterest';
import No_KidsScreen from './NoKids';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class TellALieScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quiz_num: 2, //story_num: Math.floor(Math.random() * 10)};
    story_num: 1, };
  }
  static navigationOptions = {
    title: 'M.A.S.H.',
  };


  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const profile = navigation.getParam('profile',{name: "Madelyn",age: "21", color: "Blue",});
    const love_interest = navigation.getParam('love_interest',{ l1: "Harry", l2: "John",l3: "Peter",});
    const cities = navigation.getParam('cities', { c1: "New York",c2: "L.A.", c3: "Nashville",});
    const no_kids = navigation.getParam('no_kids', { n1: 0, n2: 1, n3: 2});
    const professions = navigation.getParam('professions',{ pr1: "Doctor", pr2: "Lawyer",pr3: "programmer",});
    const vehicles = navigation.getParam('vehicles',{ v1: "Car", v2: "Bus",v3: "Truck",});
    const money_in_bank = navigation.getParam('money_in_bank',{ m1: "100", m2: "200",m3: "300",});
    const type_pet = navigation.getParam('type_pet',{ p1: "Cat", p2: "Dog",p3: "Goat",});
    const numbers  = navigation.getParam('number', {quiz_num: 0, story_num: 0});

      //console.log(this.props.navigation.state.params);
    return (
<View style={styles.parentViewStyling}>
      <ScrollView style={styles.textStyling}>
        <Text style={styles.questionStyling}>Your head aches and your palms are tingling.</Text>

     <Text style={styles.questionStyling}>
     {'\t\t'} You're not sure what brought this on, but you have a nagging feeling that the fox wants to trick you.
     You shake your head and inexplicably start talking in a Jersey accent yourself. "I haven't seen him, man." he gives you a curious look and seems to pause 
     for a second. "You're really bad at lying, aren't you?" He makes a wheezing noise that almost sounds like a laugh.
     "Okay, don't come with me. I'll go find Lae and tell him you're here, cause who knows if that dog would ever find you otherwise." 
     He darts back into the grasses and is gone before you know it.
     </Text>
     <Text style={styles.questionStyling}>
     {'\t\t'} After some time has passed, you hear something approaching through the grasses. At first, you assume its the fox coming back
     to get you to follow him again, until you hear the distinct sound of barking in the distance. The derpiest dog in existence has 
     found you and wants you to come with him.
     Should you go with the dog? {'\n'}
     </Text>

    <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/best_derp.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>

      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Go with the dog"  color="#1698bc"  onPress={() =>
      navigate('ContinueToPlayWithDog', {
      profile: profile,
      mash: {
          M: "Mansion",
          A: "Apartment",
          S: "Shack",
          H: "House",
        },
        number: {
        quiz_num: numbers.quiz_num,
        story_num: 10,
      },
      love_interest: love_interest,
      cities: cities,
     no_kids: no_kids,
  professions: professions,
   vehicles: vehicles,
    money_in_bank: money_in_bank,
  type_pet: type_pet,
     }
    )} />
  </View>
  <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Go back up the hill"  color="#1698bc"  onPress={() =>
      navigate('Wizards', {
      profile: profile,
      mash: {
          M: "Mansion",
          A: "Apartment",
          S: "Shack",
          H: "House",
        },
        number: {
        quiz_num: numbers.quiz_num,
        story_num: 10,
      },
      love_interest: love_interest,
      cities: cities,
     no_kids: no_kids,
  professions: professions,
   vehicles: vehicles,
    money_in_bank: money_in_bank,
  type_pet: type_pet,
     }
    )} />
  </View>

        </Animatable.View>
        </ScrollView>
      </View>

    );
  }
}
