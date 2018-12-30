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


export default class AnswerRiddleScreen extends React.Component {
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
        <Text style={styles.questionStyling}>The winged beast has his eyes trained on you.</Text>

     <Text style={styles.questionStyling}>
     {'\t\t'} You dare not move a muscle. The lion yawns lazily and shows you his full assortment of pointy teeth. 
     You search the room for exits. Past the dining room is a large wooden door and a window facing the garden that 
     the raven planted your seed in. You can even almost make out the apples in the trees from here. You rack your brain 
     for any useful information on what you should do in a lion attack, but come up empty. <Text style={{fontStyle: "italic",}}>Maybe it's like a bear attack? 
     Should I play dead? Make myself look threatening? </Text> The lion gives no indication of moving.

     "Answer my riddle, and I'll let you live." he tells you. {'\n'}
    </Text>

     <Text style={styles.questionStyling}>

     <Text style={{fontStyle: "italic",}}>

        "I blind you in midday, so put on your glasses,{'\n'} 
        I sway in the trees and live the grasses.{'\n'}
        Yellow and black, and tall someday I'll be, {'\n'}
        I'm a song by post malone and swae lee." {'\n'}
        What am I? {'\n'}
        </Text>

     </Text>

    <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/riddle.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

     <Text style={styles.questionStyling}>
     You repeat the riddle slowly, as if trying to pour out the meaning from it like you would an empty mug. 
     You panic, as you realize you had never really been good at riddles. This is how you die. A lion viciously 
     chomping on your neck.</Text>

     <Text style={styles.questionStyling}>
     You look around the room for clues, but see nothing. Time seems to move slowly. It's not until you look back outside the window that 
     you see something has changed... You have your answer.
    
     </Text>


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Answer the riddle"  color="#1698bc"  onPress={() =>
      navigate('RoyalSorcererChoice', {
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
