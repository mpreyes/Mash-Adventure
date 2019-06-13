import React from 'react';
import { Text, View,  Image, Button,  ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class SnackbarScreen extends React.Component {
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
        <Text style={styles.questionStyling}>Yeah, that barbaque smells too good to pass up. </Text>

      <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/snackbar.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>


    <Text style={styles.storyStyling}>
    {'\t\t'}You head over to a long table full of meats, vegetables, fruit and other assortments of snacks. But you
    don't immediately grab anything. You're a professional. {'\n'} 
    {'\t\t'}You smile and say hi to some people you obviously don't know and pretend dance for a bit before feigning exhaustion. 'I'm gonna get 
    myself a snack!' you say to no one in particular. You grab a small plate and begin piling it on, even as you're munching away. As you reach the end of the table you stop. 
    This was a birthday party for someone! The remaining two gift bags are just sitting there. Calling your name. You really hit the jackpot.
     Which one do you grab? 
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="The green and red one"  color="#1698bc"  onPress={() =>
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
        story_num: 2,
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
    <Button title="The yellow one" color="#1698bc"  onPress={() =>
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
          story_num: 7,
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
