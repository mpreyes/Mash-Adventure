import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class DHA_DontHelpRabbitScreen extends React.Component {
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
        <Text style={styles.questionStyling}>You figure the rabbit can probably make her nest by herself.</Text>




    <Text style={styles.questionStyling}>
    {'\t\t'} You reluctantly get up from your spot and sprint to meet up with the fox, whose 
    impatience is getting the best of him and has nearly left you yet again. More running for you. You look up at the moon as you run, and you realize that you've lost track of time.
    All of a sudden, your foot gets caught in a passing tree root and you stumble and fall hard on the ground. You sit up and take a moment to take stock of the damage. Luckily, you didn't sprain 
    your foot, and only have minor scrapes and bruises. You try to make out where the fox has gone, but he's nowhere in sight. You stand up and lean against a tree, when 
    all of a sudden you hear barking. The derpiest dog in existence comes bounding up to you excitedly, licking your face and bouncing around. {'\n'}
    </Text>


           <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/derp_dog_1.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

         <Text style={styles.questionStyling}>
         {'\t\t'}  It chases its tail around for a bit, then goes off somewhere and returns with a stick. It seems like it wants to play a game of catch. 
         The fox is still nowhere in sight, and you're worried that you might lose him. But this dog is just so darn cute. What do you do?
    {'\n'}
     </Text>

              <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/derp_dog_2.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>




    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Play catch with the dog"  color="#1698bc"  onPress={() =>
      navigate('PlayWithDog', {
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
  <Button  title="Try to look for the fox"  color="#1698bc"  onPress={() =>
      navigate('DHA_DHR_RavenWithNut', {
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
