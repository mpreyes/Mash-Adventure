import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class PlayWithDogScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You see no harm in playing with the dog for a bit.</Text>




    <Text style={styles.questionStyling}>
    {'\t\t'} You grab the stick and throw it as far as you can. The dog excitedly runs to get it and brings it back. You humor the dog for a while, but 
    then you start to think you should probably look for the fox again. The dog seems to sense this, and redoubles his efforts
    to bring the stick back faster and get you to catch it. You laugh and continue to play on, grateful for the break your new friend has given you.
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
         {'\t\t'} After a bit, the dog circles around you and starts walking away, barking for you to follow. You look back to where you had come from and realize that you have no idea where 
         you are anymore. You see no signs of the fox, or any other creature besides this dog. You decide to take your chances.
    {'\n'}
     </Text>

          


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Follow the dog"  color="#1698bc"  onPress={() =>
      navigate('ContinueToPlayWithDog', {
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
