import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class DHA_HR_DHV_EscapeRoomScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You look around the room. </Text>


            <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/rabbit_in_tophat.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

    <Text style={styles.questionStyling}> Immediately, you notice a top hat you hadn't seen before. <Text style={{fontStyle: "italic",}}>Weird.</Text> The hat wobbles around for a bit and you stare in amazement. Suddenly, a rabbit hops out of it,
     like the grand finale of a magician's party trick - without the magician. It begins to hop around the room excitedly, and before you can stop yourself, you clap in amazement.
    "Wow, what a great trick!" you exclaim. "It's not a trick, dearie. It's magic!" The rabbit, who you recognize as the one you had met earlier, exclaims. "Now, we need to get you out 
    of here. There's not a moment to lose!" She hops back in to the top hat and for a moment, all is quiet. Suddenly, she hops out of the hat again and in her 
    mouth is a large brass key. "Ta da! I'm here all night folks." You spring into action and use the key to open the door.

    {'\n'}
    </Text>




    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Leave the room"  color="#1698bc"  onPress={() =>
      navigate('DHA_HR_DHV_FightMonster', {
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
