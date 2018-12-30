import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 2.5.5
import Swiper from 'react-native-swiper';
import ProfileScreen from './screens/Profile';
import MashScreen from './screens/Mash';
import AboutScreen from './screens/About';
import LoveInterestScreen from './screens/LoveInterest';
import CitiesScreen from './screens/Cities';
import No_KidsScreen from './screens/NoKids';
import ProfessionsScreen from './screens/Professions';
import TransportationScreen from './screens/Transportation';
import Money_In_BankScreen from './screens/MoneyInBank';
import Type_PetScreen from './screens/TypePet';
import MashQuizNumberScreen from './screens/MashQuizNumber';
import ChooseDoorsScreen from './screens/ChooseDoors';
import WizardsScreen from './screens/Wizards';
import BrightlyLitHouseScreen from './screens/BrightlyLitHouse';
import PartyScreen from './screens/Party';
import MingleAtPartyScreen from './screens/MingleAtParty';
import DancePartyScreen from './screens/DanceParty';
import DinnerPartyScreen from './screens/DinnerParty';
import SnackbarScreen from './screens/SnackBar';
import TakePathPt1Screen from './screens/TakePathPt1';
import TakePathPt2Screen from './screens/TakePathPt2';
import TakePathPt3Screen from './screens/TakePathPt3';
import TakePathPt4Screen from './screens/TakePathPt4';
import TakePathPt5Screen from './screens/TakePathPt5';
import TakePathPt6Screen from './screens/TakePathPt6';
import TakePathPt7Screen from './screens/TakePathPt7';
import TakePathPt8Screen from './screens/TakePathPt8';
import TakePathPt9Screen from './screens/TakePathPt9';
import TakePathPt10Screen from './screens/TakePathPt10';
import SeriousOldManScreen from './screens/SeriousOldMan';
import TellTheTruthScreen from './screens/TellTheTruth';
import TellALieScreen from './screens/TellALie';
import WaitAtStumpScreen from './screens/WaitAtStump';

import AntsInStreamScreen from './screens/AntsInStream';
import HelpAntsScreen from './screens/HelpAnts';
import DontHelpAntsScreen from './screens/DontHelpAnts';

import HelpRabbitScreen from './screens/HelpRabbit';

import DerpyDogWithStickScreen from './screens/DerpyDogWithStick';
import PlayWithDogScreen from './screens/PlayWithDog';
import ContinueToPlayWithDogScreen from './screens/ContinueToPlayWithDog';
import RavenWithNutScreen from './screens/RavenWithNut';
import CountSandScreen from './screens/CountSand';

import SeriousOldManEndScreen from './screens/SeriousOldManEnd';
import CuteOldManScreen from './screens/CuteOldMan';
import CuteOldManEndScreen from './screens/CuteOldManEnd';
import CuteOldManRepeatScreen from './screens/CuteOldManRepeat';
import CuteOldManDenyScreen from './screens/CuteOldManDeny';
import SandwichShopScreen from './screens/SandwichShop';
import ResultsScreen from './screens/Results';
import styles from './Styles/Styles';
import OpenTheWalnutScreen from './screens/OpenTheWalnut';
import PlantSeedScreen from './screens/PlantSeed';
import FightMonsterScreen from './screens/FightMonster';
import EscapeRoomScreen from './screens/EscapeRoom';
import AnswerRiddleScreen from './screens/AnswerRiddle';
import RoyalSorcererChoiceScreen from './screens/RoyalSorcererChoice';
import RoyalSorcererEndScreen from './screens/RoyalSorcererEnd';


import HA_DontHelpRabbitScreen from './screens/HA_DontHelpRabbit';
import HA_HR_DontHelpRavenScreen from './screens/HA_HR_DontHelpRaven';
import HA_DHR_RavenWithNutScreen from './screens/HA_DHR_RavenWithNut';

import HA_HR_DHV_CountSandScreen from './screens/HA_HR_DHV_CountSand';

import HA_HR_DHV_EscapeRoomScreen from './screens/HA_HR_DHV_EscapeRoom';
import HA_DHR_HV_PlantSeedScreen from './screens/HA_DHR_HV_PlantSeed';

import HA_DHR_DontHelpRavenScreen from './screens/HA_DHR_DontHelpRaven';
import HA_DHR_HelpRavenScreen from './screens/HA_DHR_HelpRaven';


import HA_DHR_DHV_CountSandScreen from './screens/HA_DHR_DHV_CountSand';

import HA_DHR_HV_CountSandScreen from './screens/HA_DHR_HV_CountSand';




import DHA_HelpRabbitScreen from './screens/DHA_HelpRabbit';
import DHA_HR_RavenWithNutScreen from './screens/DHA_HR_RavenWithNut';
import DHA_HR_DHV_EscapeRoomScreen from './screens/DHA_HR_DHV_EscapeRoom';
import DHA_HR_HelpRavenScreen from './screens/DHA_HR_HelpRaven';
import DHA_HR_DontHelpRavenScreen from './screens/DHA_HR_DontHelpRaven';
import DHA_HR_DHV_CountSandScreen from './screens/DHA_HR_DHV_CountSand';
import DHA_HR_HV_CountSandScreen from './screens/DHA_HR_HV_CountSand';
import DHA_HR_HV_AnswerRiddleScreen from './screens/DHA_HR_HV_AnswerRiddle';



import DHA_DontHelpRabbitScreen from './screens/DHA_DontHelpRabbit';
import DHA_DHR_RavenWithNutScreen from './screens/DHA_DHR_RavenWithNut';

import DHA_DHR_HelpRavenScreen from './screens/DHA_DHR_HelpRaven';
import DHA_DHR_DontHelpRavenScreen from './screens/DHA_DHR_DontHelpRaven';

import DHA_DHR_DHV_CountSandScreen from './screens/DHA_DHR_DHV_CountSand';
import DHA_DHR_HV_CountSandScreen from './screens/DHA_DHR_HV_CountSand';
import DHA_HR_HV_EscapeRoomScreen from './screens/DHA_HR_HV_EscapeRoom';
import DHA_HR_HV_FightMonsterScreen from './screens/DHA_HR_HV_FightMonster';
import DHA_HR_DHV_FightMonsterScreen from './screens/DHA_HR_DHV_FightMonster';


class HomeScreen extends React.Component {

   constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    title: 'M.A.S.H.',
  };


  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.parentViewStyling}>

                  <Image
            style={{flex:1.2, height: undefined, width: undefined}}
            source={require('./images/MASH.png')}
            resizeMode="contain"
          />


            <View style={override_styles.wrapper}>
            <Swiper showsPagination={false} autoplay={true}>
        <View style={override_styles.slide}>
        <Image
            style={{height: 300, width: undefined}}
            source={require('./images/mansion.png')}
            resizeMethod="resize"
            resizeMode="contain"
          /> 

        </View>
        <View style={override_styles.slide}>
        <Image
            style={{ height: 300, width: undefined}}
            source={require('./images/apartment.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>
        <View style={override_styles.slide}>
        <Image
            style={{ height: 300, width: undefined}}
            source={require('./images/shack.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>
         <View style={override_styles.slide}>
        <Image
            style={{ height: 300, width: undefined}}
            source={require('./images/house.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>
      </Swiper>
      </View>

     









      <View style={override_styles.buttonStyling}>
      
        <View style={styles.buttonSoloStyling}>
    <Button  title="START" color="#d86a92" onPress={() => navigate('Profile') } />
    </View>

    <View style={styles.buttonSoloStyling}>
      <Button title="How To Play Traditional MASH" color="#796ad8"  onPress={() =>  navigate('Mash') }/>
      </View>
      <View style={styles.buttonSoloStyling}>
        <Button title="About MASH Adventure" color="#33c18d" onPress={() =>  navigate('MashQuizNumber') }/>
        </View>

          </View>

      </View>



    );
  }
}
  //  <Button title="Results"  onPress={() =>  navigate('Results') }/>
const  AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  About: {screen: AboutScreen},
  Profile: { screen: ProfileScreen },
  Mash: { screen: MashScreen },
  Love_Interest: { screen: LoveInterestScreen },
  Cities: { screen: CitiesScreen },
  No_Kids: { screen: No_KidsScreen },
  Professions: { screen: ProfessionsScreen },
  Transportation : { screen: TransportationScreen },
  Money_In_Bank: { screen: Money_In_BankScreen },
  Type_Pet: { screen: Type_PetScreen },
  ChooseDoors: { screen: ChooseDoorsScreen },
  MashQuizNumber: {screen: MashQuizNumberScreen},
  Wizards: {screen: WizardsScreen},
  BrightlyLitHouse: {screen: BrightlyLitHouseScreen},
  SeriousOldMan: {screen: SeriousOldManScreen},
  TellTheTruth: {screen: TellTheTruthScreen},
  TellALie: {screen: TellALieScreen},
  WaitAtStump: {screen: WaitAtStumpScreen},

  AntsInStream: {screen: AntsInStreamScreen},
  HelpAnts: {screen: HelpAntsScreen},
  DontHelpAnts: {screen: DontHelpAntsScreen},
  HelpRabbit: {screen: HelpRabbitScreen},

  HA_DontHelpRabbit: {screen: HA_DontHelpRabbitScreen},
  HA_HR_DontHelpRaven: {screen: HA_HR_DontHelpRavenScreen},
  HA_DHR_RavenWithNut: {screen: HA_DHR_RavenWithNutScreen},
  HA_DHR_DontHelpRaven: {screen: HA_DHR_DontHelpRavenScreen},
  HA_DHR_HelpRaven: {screen: HA_DHR_HelpRavenScreen},
  
  HA_DHR_HV_CountSand: {screen: HA_DHR_HV_CountSandScreen},
  
  HA_HR_DHV_CountSand: {screen: HA_HR_DHV_CountSandScreen},

  HA_HR_DHV_EscapeRoom: {screen: HA_HR_DHV_EscapeRoomScreen},

  HA_DHR_HV_PlantSeed: {screen: HA_DHR_HV_PlantSeedScreen},
  
  HA_DHR_DHV_CountSand: {screen: HA_DHR_DHV_CountSandScreen},



  DHA_HelpRabbit: {screen: DHA_HelpRabbitScreen},
  DHA_DontHelpRabbit: {screen: DHA_DontHelpRabbitScreen},
  DHA_DHR_RavenWithNut: {screen: DHA_DHR_RavenWithNutScreen},
  DHA_DHR_HelpRaven: {screen: DHA_DHR_HelpRavenScreen},
  DHA_DHR_DontHelpRaven: {screen: DHA_DHR_DontHelpRavenScreen},
  DHA_DHR_DHV_CountSand: { screen: DHA_DHR_DHV_CountSandScreen},
  DHA_HR_HV_CountSand: {screen: DHA_HR_HV_CountSandScreen},
  DHA_HR_HV_EscapeRoom: {screen: DHA_HR_HV_EscapeRoomScreen},
  DHA_HR_HV_FightMonster: {screen: DHA_HR_HV_FightMonsterScreen},

  DHA_HR_RavenWithNut: {screen: DHA_HR_RavenWithNutScreen},
  DHA_HR_HelpRaven: {screen: DHA_HR_HelpRavenScreen},
  DHA_HR_DontHelpRaven: {screen: DHA_HR_DontHelpRavenScreen},
  DHA_HR_DHV_CountSand: { screen: DHA_HR_DHV_CountSandScreen},
  DHA_DHR_HV_CountSand: { screen: DHA_DHR_HV_CountSandScreen},
  DHA_HR_HV_EscapeRoom: {screen: DHA_HR_HV_EscapeRoomScreen},
  DHA_HR_HV_AnswerRiddle: {screen: DHA_HR_HV_AnswerRiddleScreen},

  DHA_HR_DHV_EscapeRoom: {screen: DHA_HR_DHV_EscapeRoomScreen},

  DHA_HR_DHV_FightMonster: {screen: DHA_HR_DHV_FightMonsterScreen},

  DerpyDogWithStick: {screen: DerpyDogWithStickScreen},
  PlayWithDog: {screen: PlayWithDogScreen},
  ContinueToPlayWithDog: {screen: ContinueToPlayWithDogScreen},
  RavenWithNut: {screen: RavenWithNutScreen},
  OpenTheWalnut:{screen: OpenTheWalnutScreen},
  CountSand: {screen: CountSandScreen},
  PlantSeed: {screen: PlantSeedScreen},
  EscapeRoom: {screen: EscapeRoomScreen},
  FightMonster: {screen: FightMonsterScreen},
  AnswerRiddle: {screen: AnswerRiddleScreen},
  RoyalSorcererChoice: {screen: RoyalSorcererChoiceScreen},
  RoyalSorcererEnd: {screen: RoyalSorcererEndScreen},
  SeriousOldManEnd: {screen: SeriousOldManEndScreen},
  CuteOldMan: {screen: CuteOldManScreen},
  CuteOldManEnd: {screen: CuteOldManEndScreen},
  CuteOldManRepeat: {screen: CuteOldManRepeatScreen},
  CuteOldManDeny: {screen: CuteOldManDenyScreen},
  SandwichShop: {screen: SandwichShopScreen},
  Party: {screen: PartyScreen},
  MingleAtParty : {screen: MingleAtPartyScreen},
  DanceParty : {screen: DancePartyScreen},
  DinnerParty : {screen: DinnerPartyScreen},
  Snackbar: {screen: SnackbarScreen},
  TakePathPt1: { screen: TakePathPt1Screen},
  TakePathPt2: {screen: TakePathPt2Screen},
  TakePathPt3: {screen: TakePathPt3Screen},
  TakePathPt4: {screen: TakePathPt4Screen},
  TakePathPt5: {screen: TakePathPt5Screen},
  TakePathPt6: {screen: TakePathPt6Screen},
  TakePathPt7: {screen: TakePathPt7Screen},
  TakePathPt8: {screen: TakePathPt8Screen},
  TakePathPt9: {screen: TakePathPt9Screen},
  TakePathPt10: {screen: TakePathPt10Screen},
  Results: { screen: ResultsScreen },

});

const override_styles = StyleSheet.create({
imageViewStyling: {
  flex: 1,

},
wrapper: {
 flex: 2,
},

bounceImage:{
  flex: 1,
},
buttonStyling: {
  flex: 1,
  paddingBottom: 20,

},
slide: {
    flex: 1,
}

});

export default createAppContainer(AppNavigator);
