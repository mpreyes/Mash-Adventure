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


export default class DancePartyScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You think that by getting people to dance you'd be helping her as well.</Text>

    <Text style={styles.storyStyling}>
    {'\t\t'}You walk towards the boom box to see if there are any good songs that you can play. A loud and painful
     noise screeches out as you try to turn on the boom box.The party-goers grimace and stare at you.
     You turn the volume down and search for a song. Unfortunately, the only songs present are "Ice Ice Baby" and "Barbie Girl",
     so you choose the lesser of two evils and crank the volume up. {'\n'}

    </Text>
    <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/boom_box.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>
    <Text style={styles.storyStyling}>

     {'\t\t'} "Hey everyone, lets dance!" You make your way to the dance floor, painfully unaware that 
     most people are giving you a look of horror. Once you're at the center of the floor you 
     start to work your magic. First the macarena. Then some sprinkler action. And as a grand finale, 
     you give the people your attempt at the splits. "Ayy come on guys!" you call.  No one joins you. 
     In fact, everyone is looking at you like a wild monkey that just escaped from the zoo.{'\n'}

     {'\t\t'} Thankfully, someone shuts off the boom box and everyone resumes their conversations. The hostess
     strides over to you with an irritated look on her face. "Hey, I don't recognize you. Do you have an invitation?" 
    You panic, and do the only thing you can think of to do.
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Grab a gift bag and run"  color="#1698bc"  onPress={() =>
      navigate('Results', {
      profile: profile,
      mash: {
          M: "Mansion",
          A: "Apartment",
          S: "Shack",
          H: "House",
        },
        number: {
        quiz_num: numbers.quiz_num,
        story_num: 6,
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
