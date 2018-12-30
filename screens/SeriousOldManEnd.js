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


export default class SeriousOldManEndScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You take your chances and run after the fox.</Text>




    <Text style={styles.questionStyling}>
    {'\t\t'}"Hey wait up!" you call. The fox seems to hear you and slows down just enough for you to catch up and then 
    it's off again, darting and moving through the grasses. After what seems like eternity, the fox stops in front 
    of a large tower. It darts over to a large wooden back door and scratches it with it's paw. The door opens, and
    you are ushered inside a dimly lit staircase by a maid. "She's up the stairs. Hurry, she's only gotten worse" The maid
    looks genuinely worried. The fox climbs the stairs in a slow step by step fashion. You're grateful 
    to slow down, as this allows you to catch your breath. {'\n'}
    </Text>

      <Text style={styles.questionStyling}>

    
    {'\t\t'}When you reach the top, you enter a small room. Most of the light is coming from the single 
    window in the room, so it's a bit hard to make out what's happening. You see an older lady laid down on a bed
    and a man kneeling on the floor next to her, holding her hand. As you approach, the man looks up. 
    "Thank goodness you're here. We don't know what to do. She's been bitten by a golden roaver and we 
    have no antidote." He looks at you expectantly. "I'm not sure how  I can help" you say. "I'm only an
    apprentice. Well, not even that yet. The wizard... I don't know where he is." The man turns to look at the 
    fox. "Wyndin what's going on?" The fox looks at you. 
    
    {'\n'}

     </Text>

           <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/wizards.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

     <Text style={styles.questionStyling}>
    {'\t\t'} "Very well done apprentice. You passed the test." You look up to see the wizard stride in.
    "You were honest, took chances, and helped others when they were in need. That is what a true wizard 
    is all about." 

    After years of training under the wizard, you were finally able to master a good darts

    As he lay dying, he motioned you to come closer "The protection of this kindom is your resposibility now. 
    You must be the guardian against the evil that wants to take advantage of our people. Here, I have one 
    final gift for you."
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Take his last dying gift"  color="#1698bc"  onPress={() =>
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
