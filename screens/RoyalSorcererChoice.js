import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class RoyalSorcererChoiceScreen extends React.Component {
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
        <Text style={styles.questionStyling}>"Well done, human. You've passed the tests."</Text>

     <Text style={styles.questionStyling}>
     {'\t\t'} The next thing you know, the lion is gone and in its place is the sneaky fox that had 
     led you to this dreadful tower. 

        "Come. Meet my master."
     </Text>

     <Text style={styles.questionStyling}>
      The fox leads you outside towards the garden. The sun has just come up over the horizon and the sky is 
      bright and cheery. As you walk up to the apple orchard, you see a tall woman with a large staff standing 
      near the sunflowers your seed had magically grown to be. She's regal and dignified, wearing a purple robe and jewelry 
      that could probably buy a kindgom. 

      "It's nice to finally meet you, {profile.name}. My name is Enelle, acting royal sorceress of this kingdom." 
      You stare in amazement. </Text>

               <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/royal_sorceress.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

      
      <Text style={styles.questionStyling}>
       "I sent my loyal companion to where you were to test to see what you were made of. I'm happy to 
      say that you've exceeded my expectations. You were honest, took chances, and helped others when they were in need. That is what a true wizard 
    is all about." you manage to nod your head. "Many a sorcerers are looking for apprentices 
      nowadays. I'm happy to have found you. If you accept, you will join me here and train in all the duties of the royal sorcerer.
      Once you are deemed worthy by the king, you will be expected to take over the duties that a sorcerer is required to attend
      to, and succeed me in my title." she pauses. "This is not a matter to be taken lightly, however. Think carefully now, and if you
      decide this is not for you, there will be no choice but to erase your memories of this test and bring you back to the 
      old stump where Gero found you, with nothing but a lie on your lips..." she gestures to the fox, and he comes to stands by her side.
       "You can still become an apprentice for Chester, you know. He's a good sorcerer and a safer assignment than this could ever be.
      Or even Stuart would be an option, but goodness knows if you would learn anything!" She laughs for a good while there, and you realize that she's talking about the wizards 
      you had met when you had first got here. </Text>
      
      
      <Text style={styles.questionStyling}>
       "So, what do you say?"
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Accept the apprenticeship"  color="#1698bc"  onPress={() =>
      navigate('RoyalSorcererEnd', {
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
  <Button  title="Refuse"  color="#1698bc"  onPress={() =>
      navigate('TellALie', {
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
