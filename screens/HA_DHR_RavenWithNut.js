import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class HA_HR_RavenWithNutScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You decide you'd better try to find the fox.</Text>


          <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/raven.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

    <Text style={styles.questionStyling}>
    {'\t\t'}After all, he did say someone was dying. You give the cute dog a quick head pat, and you're on your way again towards the last place you saw
    the fox. You walk for a bit and see the fox on a far hill, furiously trying to climb tree.
    "What are you doing?" you ask. He doesn't immediately answer and continues to jump, pawing and snarling. Suddenly you hear a cackle from the tree above. "You'll never reach me up here, fox! hahaha" 
    you look up to see a large raven perched on a branch. The fox glares at the raven and stalks off, calling for you as he walks.
    "Come on human! You are slow and we still have some ways to go." You start to walk with him ready to ask what is going on, when the voice of the raven stops you. "Human, come here." You turn back and tentatively approach the tree.
    "Can you do me a favor?" He drops something on the ground. "Can you open this for me? I seem to be having some...difficulties." At this, he gives another 
    eerie laugh. You bend down and pick up what looks like an ordinary walnut. "You can't open this?" 
    {'\n'}
    </Text>


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Help the raven"  color="#1698bc"  onPress={() =>
      navigate('HA_DHR_HelpRaven', {
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
  <Button  title="The bird can fend for himself"  color="#1698bc"  onPress={() =>
      navigate('HA_DHR_DontHelpRaven', {
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
