import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class CuteOldManScreen extends React.Component {
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
        <Text style={styles.questionStyling}>{'\t'}You decide to follow the cute old man, as he looks friendlier and you 
        could really use some cheering up after the day you've had today.</Text>

      <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/cuteoldman.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>


    <Text style={styles.storyStyling}>
    {'\t\t'}The cute old man tells you his name is Gilbert and starts talking away in an animated voice about a show
   he needs to prepare for tonight. He rambles on about how his last assistant ran off with the ring leader of the nearby circus and then you hear something about
   not being small enough to fit...  {'\n'}
   {'\t\t'}You're not really paying attention though, because you're thinking of all the hopes and dreams you have and how you're finally going to get your life together this year. 
   You'll travel more. Finally hit the gym. Heck maybe even meditate. You'll say yes to new experiences that come 
   your way. All of life's big questions are swirling around in your brain. Why was I born?' 'What is my purpose?' 'What does love really mean?'  {'\n'}
   
   {'\t\t'} Lost in your thoughts, you continue to walk down the 
   path with this funny little man when next thing you know, you've reached a rather sad looking house. Coming to a stop, you hear him
   say the words 'What do you think? You want to do it?'
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="'Of course I'll do it!'"  color="#1698bc"  onPress={() =>
      navigate('CuteOldManEnd', {
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
    <Button title="Ask him to repeat the question" color="#1698bc"  onPress={() =>
        navigate('CuteOldManRepeat', {
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
      <Button title="Say no and look for a way out" color="#1698bc"  onPress={() =>
          navigate('CuteOldManDeny', {
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
