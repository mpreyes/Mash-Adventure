import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class HA_HR_DontHelpRavenScreen extends React.Component {
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
        <Text style={styles.questionStyling}>The raven is probably laughing at you, anyways.</Text>


          <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/walnut.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

     <Text style={styles.questionStyling}>
     {'\t\t'} You throw the walnut to the ground and run back towards the fox again, hoping that it's not much longer until your final destination. The moon is long gone by now, and the sun is just 
     peeking out from the far off horizon. After walking for a bit longer, the fox stops in front of the largest tower you had ever seen. It's covered in vines and greenery, 
    but through the foliage you manage to see a small wooden door. The fox sprints towards the door and furiously scratches it. After a few seconds, a servant opens the 
    door and leads you inside. The walls of the tower are made of stone, as is the narrow staircase that the fox begins to climb. "Almost there, human." he tells you, 
    sensing that you are tired and weary. After climbing many flights of stairs, you reach another door. "Here it is. We've arrived." You open the door and walk inside.
    The room is poorly lit, as there's only a small window and it has a subtle smell of the ocean. On one side of the room you can see a large pile of sand higher than
    your head, and on the other side next to another door sits a scale and a small box, among other things. There's a rope fixed to the scale and box that stretches out to the ceiling of the room. You hadn't realized that the fox had not followed you in 
until- "Good luck human. Only fifty thousand grains of sand will open the box." The door closes, and you hear the fox start the long climb downstairs. "Wait!" you call.
"You lied to me! Where's the wizard? And what happened to the lady that was dying?" No answer. You're stuck in the room.
     </Text>


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Begin to count the sand"  color="#1698bc"  onPress={() =>
      navigate('HA_HR_DHV_CountSand', {
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
