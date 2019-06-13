import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class DinnerPartyScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You decide to see if she needs any help.</Text>

    <Text style={styles.storyStyling}>
    {'\t\t'}You approach her just as she's bringing out a tray full of napkins and silverware. "Hey, let me help you 
    with that." You take the tray and begin to distribute it amongst the guests. You exchange pleasant hellos 
    and learn that the birthday girl is a professional ballet dancer. Most of her guests are part of a big name traveling dance group that's shes in. Good thing you didn't try your dance moves in front of them. {'\n'}
      </Text>
      <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/dance_group.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

      <Text style={styles.storyStyling}>
    {'\t\t'} When you've finished passing out the silverware, you check back in with the hostess. "Any thing else I can help 
    with?" you ask. She nods her head. "Will you help me get the cake? It's pretty big and I can't carry it by myself." 
    You nod you head, and ask the question that's been on your mind this entire time. "How come you're doing everything, when it's 
    your birthday? Shouldn't other people be doing this?" She gives you a look. "It's not my birthday! I'm not the birthday girl." She
    laughs. "I guess this hat was a bit misleading. It's my sister's birthday!" She takes you over to another young 
    woman wearing a similar sundress, and introduces you. Now it's clear why the girl in the hat had been doing everything.
    Her poor sister was in crutches. After you wish her a happy birthday, you walk back to the table and exchange looks with the hat girl.
     She was just trying to make her sister happy after an unfortunate accident.
      You felt deep empathy for her sister and respect and admiration for the girl in the hat. 

       </Text>
      <Text style={styles.storyStyling}>
    {'\t\t'} After hours of helping with the party and the cleanup, hat girl comes back to talk to you. "You have been such a wonderful help!" 
    She pauses a bit and smiles. "I'm glad you were here. Really glad." She walks over to the end of the food table and grabs a bag.
    "Here take a gift bag!"
    </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Take the gift bag"  color="#1698bc"  onPress={() =>
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
        story_num: 9,
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
