import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5
import ProfileScreen from './Profile';
import MashScreen from './Mash';
import ResultsScreen from './Results';
import LoveInterestScreen from './LoveInterest';
import No_KidsScreen from './NoKids';
import styles from '../Styles/Styles';


// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded,
// } from 'react-native-admob';



export default class ChooseDoorsScreen extends React.Component {
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
  //  console.log("in choose number");
      console.log(this.props.navigation.state.params);
    return (
      <View style={styles.parentViewStyling}>

       <Text style={styles.questionStyling}>There are two doors in front of you. Which do you choose?</Text>

  <View style={{flex: 2, flexDirection: 'row', paddingHorizontal:15,paddingTop:25}}>
            <TouchableOpacity    onPress={() =>
                navigate('Party', {
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
              )}>
            <Image
          style={{flex:1, height: undefined, width: 150}}
          source={require('../images/door1.png')}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
          navigate('Wizards', {
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
        )}
        >
      <Image
    style={{flex:1, height: undefined, width: 150}}
    source={require('../images/door2.png')}
    resizeMode="contain"
     resizeMethod="resize"
  />
</TouchableOpacity>
    </View>
    <View style={{flex: 1,}}>
    <Text style={styles.questionStyling}>OR {'\n\n'}</Text>

    <Button  title="Get M.A.S.H. result"  color="#1698bc"  onPress={() =>
      navigate('Results', {
      profile: profile,
      mash: {
          M: "Mansion",
          A: "Apartment",
          S: "Shack",
          H: "House",
        },
        number: {
        quiz_num: numbers.quiz_num,
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
   




    

    {/* <AdMobBanner
  adSize="largeBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> */}

      </View>

      
    );
  }
}
