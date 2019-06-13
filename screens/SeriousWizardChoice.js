import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class  SeriousWizardChoiceScreen extends React.Component {
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
        <Text style={styles.questionStyling}> Soon enough, you reach the end of the path.</Text>

            <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/cottage.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>


      <Text style={styles.questionStyling}>
         {'\t\t'}  Hidden behind some impressive-looking foliage is a small cottage
        with a light at its window. The dog cheerfully opens the door with its nose, and leads you inside. It's cozy and warm,
         with the smell of old books and bread. The small entryway is filled with manuscripts and scrolls, as is almost every 
         corner of the cottage. At the far end of the small room is a table, and behind the table sits the wizard you had been following.
         "B-but how are you here?" you ask. "Well this is my home!" he exclaims, as the dog cheerfully licks his hand. "This is Lae!" he says.
         "I told him to bring you here, as I had some urgent matters to attend to that I couldn't bring you on. I hope you do forgive me."
         He stands up from the table and shakes your hand. "My name is Chester, and I'm the town's wizard. I help the townspeople with some 
         small magic as well as travel around the kingdom in search for new spells. I also help the king and his magicians from time to time. I've 
         been looking for an apprentice for quite some time." he looks a you expectantly. You hesitate. If you want more excitement than a small town wizard can provide, I hear Enelle is looking for an apprentice as well. She might
        be willing to take you on, but its a lot more difficult and dangerous. 
     </Text>


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Accept apprenticeship"  color="#1698bc"  onPress={() =>
      navigate('SeriousWizardEnd', {
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
  <Button  title="Go back to the beginning"  color="#1698bc"  onPress={() =>
      navigate('Wizards', {
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
