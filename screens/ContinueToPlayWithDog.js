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
import resultStyle from '../Styles/resultStyle';
import { material } from 'react-native-typography';


export default class ContinueToPlayWithDogScreen extends React.Component {
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
        <Text style={styles.questionStyling}>Without even realizing it, you've followed the dog onto a completely different path than the one you and the fox had 
         been following.</Text>




          <Text style={styles.questionStyling}>
         {'\t\t'}It's a small and narrow path, with twist and turns that seem to make no sense at all. You're completely lost 
         now, and you're at the mercy of a dog to guide you through. You call out to the dog up ahead "Hey dog, wait up! I don't know 
         where were going! We have to go back!" You have no choice but to follow on.
    {'\n'}
     </Text>


           <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/wooden_stick.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

      <Text style={styles.questionStyling}>
         {'\t\t'}  Soon enough, you reach the end of the path. Hidden behind some impressive foliage is a small cottage, and soon enough
         you see a light at the window. The dog cheerfully opens the door with its nose, and leads you inside. It's cozy and warm,
         with the smell of old books and bread. The small entryway is filled with books, as is almost every 
         corner of the cottage. At the far end of the small room is a table, and behind the table sits the wizard you had been following.
         "B-but how are you here?" you ask. "Well this is my home!" he exclaims, as the dog cheerfully licks his hand. "This is Lae!" he says.
         "I told him to bring you here, as I had some urgent matters to attend to that I couldn't bring you on. I hope you do forgive me."
         The dog is content to sit by his master's chair. ""
     </Text>




              <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/derp_dog_2.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>




    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="--"  color="#1698bc"  onPress={() =>
      navigate('PlayWithDog', {
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
  <Button  title="--"  color="#1698bc"  onPress={() =>
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
