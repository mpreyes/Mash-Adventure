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


export default class DHA_HR_DHV_CountSandScreen extends React.Component {
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
        <Text style={styles.questionStyling}>(didnt help ants, helped rabbit, dindnt help raven.)You sit on the floor and catch your breath.</Text>


          <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/scale_sand.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

    <Text style={styles.questionStyling}> {'\t\t'}<Text style={{fontStyle: "italic",}}> Did he say fity thousand grain of sands exactly? It would take forever! </Text>
    You couldn't even see properly in this room. The light from the sun was nowhere near strong enough to see what what color the walls were, much less
    count tiny grains of sand. You stand up and give both doors a good try (you didn't want to be the fool who only 
    <Text style={{fontStyle: "italic",}}> thought </Text> he had been locked in a room by a talking fox.) You accept your fate and head to window to look outside.
     It was getting brighter now, which might meant you could start the arduous task of counting. Almost immediately, you begin to feel hungry. Outside is a small 
     path leading to a beautiful garden full of fresh fruits and vegatebles. You wish that you had the powers of telekineses. You move away from the 
    window and begin to count, wishing there were someone to help you. Each tiny grain of sand must be moved
    to the scale as carefully as possible. The wind from the window doesn't help. Your head aches from hunger and exhaustion.
    After about an hour of counting, you hear a rusle from the other side of the room.
    {'\n'}
    </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Investigate the sound"  color="#1698bc"  onPress={() =>
      navigate('DHA_HR_DHV_EscapeRoom', {
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
