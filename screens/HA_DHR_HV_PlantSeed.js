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


export default class HA_DHR_HV_PlantSeedScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You look around the room for clues.</Text>


          <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/apple.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

    <Text style={styles.questionStyling}> {'\t\t'}Nothing immediately comes to mind. Everything is the same as it was, except the ants have made their way out 
    of the window now. You follow the last of them to look outside. Down below the tower is a small path that leads to a garden. You spot 
    some really nice looking apple trees and realize that after running around all night, you're famished. You stare longingly at the apples, 
    wishing that you had the powers of telekinesis.
    </Text>
    
    <Text style={styles.questionStyling}>
    {'\t\t'}Maybe you didn't have magical powers, but you did have some friends in high places. You look up 
    to see the raven, soaring above. He lands on the windowsill next to you and begins to clean his feathers as he talks. "So human. You look mighty gloomy.
    What's the matter?" you give him a pitiful look. "I'm hungry... and those apples over there look scrumptious...." you trail off and look at him 
    expectantly. He sighs. "Oh all right." He soars towards the garden and brings you back the most beautiful apple you have ever seen. You 
    much away happily and tell him about the seed you found. "Oh a seed? hmm, that is peculiar. Let me look at it." You place it next to you for him to examine. 
    "Well, I'm sure there's only one solution to this. We must plant it." And before you can object, he's off, seed in beak to plant the it near the apple trees.
    You watch him dig the dirt for a bit and plant it ever so carefully, and when he's done he gives the ground a pat almost as if to say 'Well done.'
    He soars back to perch next to you. "Now what?" you say. "Now you wait." 
    {'\n'}
    </Text>

    <Text style={styles.questionStyling}>
    {'\t\t'} After a while, the raven takes his leave of you. You wonder just how this seed is supposed to help you escape.
    Turning back to the room you are in, you decide to hunt for clues and figure out a way to escape. After hours of searching and waiting, you realize that
    there's nothing in the room that can help you. The sun sets, and you're left in the dark room alone. "You are not worthy." are the last words you hear before everything turns black.
      {'\n'}
    </Text>



    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Try again?"  color="#1698bc"  onPress={() =>
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
