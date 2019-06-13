import React from 'react';
import {  Text, View, Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class CuteOldManDenyScreen extends React.Component {
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
        <Text style={styles.questionStyling}>{'\t'}You decide that this is really not your cup of tea..</Text>

      <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/cupoftea.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>


    <Text style={styles.storyStyling}>
       Do you want to: 
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Catch up with the other old man"  color="#1698bc"  onPress={() =>
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
    )} />
  </View>
  <View style={styles.adventureSoloButtonStyling}>
    <Button title="Head for the brightly lit house" color="#1698bc"  onPress={() =>
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
    <View style={styles.adventureSoloButtonStyling}>
      <Button title="Ask the game creator if they know a good sandwich shop in this area" color="#1698bc"  onPress={() =>
          navigate('SandwichShop', {
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
