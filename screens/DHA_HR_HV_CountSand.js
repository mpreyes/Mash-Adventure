import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class DHA_HR_HV_CountSandScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You sit on the floor and catch your breath.</Text>


          <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/scale_sand.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

    <Text style={styles.questionStyling}> {'\t\t'}<Text style={{fontStyle: "italic",}}> Did he say fifty thousand grain of sands exactly? It would take forever! </Text>
    You couldn't even see properly in this room. The light from the sun was nowhere near strong enough to see what what color the walls were, much less
    count tiny grains of sand. You stand up and give both doors a good try (you didn't want to be the fool who only 
    <Text style={{fontStyle: "italic",}}> thought </Text> he had been locked in a room by a talking fox.) You accept your fate and head to window to look outside.
    It was getting brighter now, which might mean you could start the arduous task of counting. Almost immediately, you begin to feel hungry. Outside is a small 
     path leading to a beautiful garden full of fresh fruits and vegetables. You wish that you had the powers of telekineses. 
     After an hour of the tedious work, you go back to the open window and see that the raven you met earlier is perched on the ledge.
    You plead with the raven and ask him to bring you something to eat. Fortunately he obliges, bringing you one of the most beautiful apples you had ever
    seen. He sits and talks with you for a while, and leaves when you tell him you need to get back to counting before the sun sets. You turn back to your work. 
    Each tiny grain of sand must be moved to the scale as carefully as possible. After almost a full day's work you finally finish. You hear a soft 'clink' and a key falls from the ceiling onto the floor.
     It's tiny, not much bigger than your little finger, and couldn't possibly fit on any of the doors. The box next to the scale looks promising enough, so you try your luck and lo and behold it opens. 
    The inside is lined with soft velvet and contains a small seed. 
    {'\n'}
    </Text>

     <Text style={styles.questionStyling}>
     {'\t\t'} <Text style={{fontStyle: "italic",}}>What? A seed? </Text> You're not sure what to do. You expected a key or something magical to help you 
     escape, but all you've got is a seed. Maybe you need to plant it? Or eat it? 
     </Text>


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Look around the room for clues"  color="#1698bc"  onPress={() =>
      navigate('DHA_HR_HV_EscapeRoom', {
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
