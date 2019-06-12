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


export default class CuteOldManEndScreen extends React.Component {
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
        <Text style={styles.questionStyling}>{'\t'}You say yes to the old man without even knowing what you 
        said yes to. Great choice. (Insert sarcastic look here)</Text>

      <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/cuteoldman.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>


    <Text style={styles.storyStyling}>
    {'\t\t'}Gilbert leads you into the house and asks you to help him get his things. Inside, you find the messiest house 
    you've ever seen. There's confetti on the floor, cups and plates scattered throughout, and colorful scarves everywhere. {'\n'}
   {'\t\t'}Gilbert heads to a giant trunk in the middle of the living room and starts rummaging around. After a bit, he pulls out a giant
   sword. 'Aha! Here it is. Take it.' Gilbert hands you the sword.
    Upon closer inspection, you see that it is very real. With more strength than you thought a little man could possibly have, Gilbert then begins 
   to roll the trunk outside. You motion to help him, but he stops you. 'See that table behind you? Theres some camera equipment I need. Can you 
   bring it outside?' He giggles like a schoolgirl. You begin to wonder if murderers can look like funny little old men too. {'\n'}

    {'\t\t'}After following him outside, you begin to see why he handed you the sword. Apparently, Gilbert really was magical. Unfortunately, he didn't have any real magical powers.
     His request had been for you to help him film his online magic show where he would perform card tricks and pull rabbits out of hats. Oh and also you were to climb
    into the giant box and he would stick swords into it. Like real swords. Real swords that could cut you. {'\n'}
    
    {'\t\t'}You quickly begin to help him film, but suggest that instead of you being in that scary trunk, it might be all the more suspenseful if he got in the box
    himself and surprised the audience. He seems to be confused for a moment, but then empathetically shakes his head. "That's a great idea! Why hadn't
    I thought of that?" You sigh in relief and help him into the box. You had imagined that it would be one of those 'fake boxes' that 
    magicians used that had fake holes in them, but no. It looked to be a normal trunk with lots of scratch marks and carved out holes in odd places. {'\n'}

     {'\t\t'}You leave the camera on its stand and film yourself making a big show of sticking in the swords in the box. 'And now, I will stick in this very
     real sword into the box!' you yell. Obviously you did no such thing. Gilbert didn't seem to notice, after he climbed out of the box for his final bow, that you had mimed the
     whole act. He'd find out when reviewing the footage and you'd be long gone by then.  {'\n'}
   
   {'\t\t'}'Thanks for helping me with my show!' Gilbert says.
   'I don't have much, but accept this as payment!'. He hands you a small and greasy brown paper bag. 
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Take the paper bag"  color="#1698bc"  onPress={() =>
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
        story_num: 4,
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
