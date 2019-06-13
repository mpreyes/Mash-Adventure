import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../Styles/Styles';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

export default class MashQuizNumberScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    quiz_num :  Math.floor(Math.random()*(10-1+1)+1), 
    story_num: 0,
    isShowingQuestion: false,
    isShowingRandomNum: false,
    isDisabledButton: true,

   
};

setInterval((state) => {
  this.setState(previousState => {
    return { isShowingQuestion:  true };
  });
}, 1000);

setInterval((state) => {
  this.setState(previousState => {
    return { isShowingRandomNum: true,  isDisabledButton: false};
  });
}, 3000);

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
    let first_question = 'Did you draw something cool yet?';
    let random_num_text = `Okay here's your magic number: ${this.state.quiz_num}`;
    
    let show_question = this.state.isShowingQuestion ? first_question : ' ';
    let show_random_num = this.state.isShowingRandomNum ? random_num_text : ' ';
    let disabledButton = this.state.isDisabledButton;
    
   
    return (
        
      <View style={styles.parentViewStyling}>
        <Text style={styles.questionStyling}>Draw a spiral. Or paint a picture. Really, just wait here
        while I find your magic number. </Text>
        
        <Text style={styles.questionStyling}>{show_question} </Text>

             <Text style={styles.questionStyling}>{show_random_num}</Text>

  <View style={styles.sketchContainer}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SketchCanvas
            style={{ flex: 1}}
            strokeColor={'black'}
            strokeWidth={7}
          />
        </View>
      </View>
      
        <View style={{paddingTop: 10}}>
               <Button  title="Thanks?"  color="#1698bc" disabled={ disabledButton} onPress={() =>
      navigate('ChooseDoors', {
      profile: profile,
      mash: {
          M: "Mansion",
          A: "Apartment",
          S: "Shack",
          H: "House",
        },
        number: {
        quiz_num: this.state.quiz_num,
        story_num: 0,
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

      </View>

      


  
    );
  }
}
