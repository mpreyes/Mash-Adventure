import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class HelpAntsScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You decide to help the ants cross the stream.</Text>




    <Text style={styles.questionStyling}>
    {'\t\t'} You look around to see if you can find something to help you. Next to the stream is a large leaf, perfect for the ant colony to climb into. 
    You leave your shoes at the edge, and hold the leaf so that the ants climb in. When all the ants have boarded your leafy ship, you gently place the leaf
    on the opposite side, grab your shoes, and sprint towards the direction of the fox.
    Fortunately he waited for you, and he gives you a look of impatience. "We're trying to get there today, my friend. Keep up." And with that he's off again,
      bounding across hills and valleys. 
      {'\n'}
      {'\t\t'}
      You've been moving for a while now, with no sign of stopping. The only good thing about moving so quickly is that it's kept you warm from the chilly night air.
       You call out to the fox. "I need a break! Can we stop here?" He slows down and stops at the edge of some trees.
    
     {'\n'}
    </Text>

   

           <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/rabbit.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

         <Text style={styles.questionStyling}>
      You move to sit at a nearby log, when you hear some rustling sounds near a large bush up ahead. Despite your 
      tiredness, you stand up and investigate. Pulling back the branches you see what looks to be a mother rabbit, hard at work making it's nest for its litter of kittens.
      You think you might try to help the rabbit finish its nest, but are unsure if it needs your help at all.
      You hear the fox a ways away, impatient again to be off. The night <Text style={{fontStyle: "italic",}}>is</Text> getting chillier 
      the longer you wait.
      What do you do? 
    
    {'\t\t'}
    {'\n'}

     </Text>



    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Help the rabbit"  color="#1698bc"  onPress={() =>
      navigate('HelpRabbit', {
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
  <Button  title="Let it do its own thing"  color="#1698bc"  onPress={() =>
      navigate('HA_DontHelpRabbit', {
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
