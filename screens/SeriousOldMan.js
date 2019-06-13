import React from 'react';
import { Text, View,  Image, Button,  ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class SeriousOldManScreen extends React.Component {
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
        <Text style={styles.questionStyling}>The serious looking man looks like the safer choice. You step towards him, ready to ask him what you need to do when he nods his head and begins to walk up
        the hill. You take this as as sign to follow.</Text>




    <Text style={styles.questionStyling}>
    {'\t\t'}After walking for a bit in silence, you try to ask him again but he stops you and motions to be quiet. 
    You oblige, as the beard gives him the authority. He has a twinkle in his eye, though, and upon closer inspection you see he's actually
    smiling. You flash him a worried smile and forge ahead, following a complete stranger down a dark path.{'\n'}
    {'\t\t'}You don't really know how long you were walking when suddenly, he stops in front of an old and gnarly tree trunk with 
    its top cleanly cut off. "Sit here and wait for me." Without waiting to hear your response, he strides off into the forest. "Wait, what do you mean wait here?!" 
    you call out but he continues to walk until he's no longer in sight. You sit down and accept your fate, taking in your surroundings. 
    The forest, even in the dim lighting of the full moon, was as vibrant green as ever and the grass was long and uncut.
    It was a wholly different place from the path you had been walking on before. You sit and listen to the rustle of the trees for a while
    and attempt to identify the stars in the night sky, when you realized that a whole hour had passed and he had still not come back. You hear a howl 
    in the distance, and you begin to worry. 
    <Text style={{fontStyle: "italic",}}> Was he in danger? Did he lie and is using me as bait for some magical creature he had in store? </Text>
     Your mind ran wild. {'\n'}

      Suddenly, you hear rustling from the grasses in front of you.<Text style={{fontStyle: "italic",}}> Was he back? </Text>
     You stand up to take a better look, when a fox walk out of the grasses in front of you.

     </Text>

           <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/fox.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

     <Text style={styles.questionStyling}>
    {'\t\t'} You had never seen real fox before. Not unless you counted the zoo. It was a of an orange color, and walked toward you in a manner that could only be
     described as swagger. Or of having serious injury. You stare as the creature begins to speak in a very distinct Jersey accent. "Ayyy homie. You know where that old 
     wizard dude be at? Some of my pals are looking for him."
     </Text>

    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Tell him the truth"  color="#1698bc"  onPress={() =>
      navigate('TellTheTruth', {
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
  <Button  title="Lie"  color="#1698bc"  onPress={() =>
      navigate('TellALie', {
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
        </Animatable.View>
        </ScrollView>
      </View>




    );
  }
}
