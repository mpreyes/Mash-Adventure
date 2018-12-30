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


export default class RoyalSorcererEndScreen extends React.Component {
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
        <Text style={styles.questionStyling}>"Very well. We shall begin your training in the morning."</Text>

     <Text style={styles.questionStyling}>
     {'\t\t'} Time seems to pass by quickly after that fateful day. You begin your training alongside the sorceress
     and learn magical spells, potions, and all sorts of enchantments. You learn more about your kingdom and it's history,
     you meet the king and queen, and attend royal balls and banquets. 
     </Text>

    <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/rabbit_in_tophat.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

     <Text style={styles.questionStyling}>
     Training to become a sorcer is some of the hardest work you've ever had to do, requiring intense concentration and effort, but you're enjoying every moment of it.
      Eventually, you become comfortable in yourself and in your magic. One day, as you're tending to the plants in the garden, the sorceress strolls 
     outside. She has her cloak on, just like she does any time she goes on her many trips to get supplies or meet
     with other wizards. She looks at you for a moment, and you realize that you've come to respect and admire her. "It's time." she 
     says. "Here. A parting gift." she hands you a small pouch and dissapears.
     </Text>


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>

      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Open the gift"  color="#1698bc"  onPress={() =>
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
