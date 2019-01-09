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


export default class WizardsScreen extends React.Component {
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
        <Text style={styles.questionStyling}>Up ahead, you see two funny old men and a brightly lit house behind them.
        The first man looks cute and kindly. The second looks serious and a bit gruff.</Text>

      <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/wizards.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>


    <Text style={styles.questionStyling}>
    Upon reaching them, they tell you that they are looking for an apprentice. Do you:
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Go with the cute old man"  color="#1698bc"  onPress={() =>
      navigate('CuteOldMan', {
      profile: profile,
      mash: {
          M: "Mansion",
          A: "Apartment",
          S: "Shack",
          H: "House",
        },
        number: numbers,
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
    <Button title="Follow the more serious man" color="#1698bc"  onPress={() =>
        navigate('SeriousOldMan', {
        profile: profile,
        mash: {
            M: "Mansion",
            A: "Apartment",
            S: "Shack",
            H: "House",
          },
          number: numbers,
        love_interest: love_interest,
        cities: cities,
       no_kids: no_kids,
    professions: professions,
     vehicles: vehicles,
      money_in_bank: money_in_bank,
    type_pet: type_pet,
       }
      )}/>
    </View>
    <View style={styles.adventureSoloButtonStyling}>
      <Button title="Say no thanks and head for the house" color="#1698bc"  onPress={() =>
          navigate('BrightlyLitHouse', {
          profile: profile,
          mash: {
              M: "Mansion",
              A: "Apartment",
              S: "Shack",
              H: "House",
            },
            number: numbers,
          love_interest: love_interest,
          cities: cities,
         no_kids: no_kids,
      professions: professions,
       vehicles: vehicles,
        money_in_bank: money_in_bank,
      type_pet: type_pet,
         }
        )}/>
      </View>
        </Animatable.View>
        </ScrollView>
      </View>
    );
  }
}