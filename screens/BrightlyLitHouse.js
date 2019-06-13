import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class BrightlyLitHouseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quiz_num: 2, 
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

    return (
      <View style={styles.parentViewStyling}>
      <ScrollView style={styles.textStyling}>
        <Text style={styles.questionStyling}>You walk past the old men and tell them that you're really just trying to get to your 
        M.A.S.H. ending as quickly as possible. Understandably, they look a bit peeved and look past you 
        to see the next player come through the door.</Text>

      <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 1}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/brightlylithouse.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>


    <Text style={styles.questionStyling}>
    {'\t'}You reach the house and see that the door is wide open. You step inside into a cozy and brightly lit room.
   As you admire the artwork on the wall and muse over the choice of wall paint you notice oddly placed packages
   scattered throughout the room. <Text style={{fontStyle: "italic",}}>These must be for me!</Text> you think, like the self absorbed player you are.
   The game says you can only pick one. Which do you take?

     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Choose the blue package"  color="#1698bc"  onPress={() =>
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
  <View style={styles.adventureSoloButtonStyling}>
    <Button title="Choose the pink package" color="#1698bc"  onPress={() =>
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
          story_num: 3,
        },
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
