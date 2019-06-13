import React from 'react';
import { Text, View,  Image, Button, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';
import { material } from 'react-native-typography';

export default class MashScreen extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {age: ''};
  }

  static navigationOptions = {
    title: 'M.A.S.H.',
    backgroundColor: 'blue',
  };
  render() {
    const { navigate } = this.props.navigation;
    const  { navigation } = this.props;
    const name = navigation.getParam('name','i am named');
    return (

      <View style={styles.parentViewStyling}>
    <ScrollView style={styles.textStyling}>
      <Animatable.Text animation="lightSpeedIn" style={[material.display2]}>How To Play M.A.S.H. - The Pen and Paper Edition</Animatable.Text>


     <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
       <Text style={material.title}>M.A.S.H.</Text>
     {'\t'} is traditionally a paper and pencil game played with two people,
         which I will now refer to as the
        <Text style={{fontWeight: "bold"}}> fortune teller </Text>
        and the
        <Text style={{fontWeight: "bold"}}> fortune seeker</Text>.
   </Animatable.Text>
   <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
   {'\t'} First, our fortune teller writes word M A S H at the top of the paper, (The acronym stands
             for Mansion, Apartment, Shack, and House) chooses different categories,
          (such as potential love interests, different pet types, etc. etc.) and fills
        them with potential responses. {'\n'}
 </Animatable.Text>
     <Image
   style={{flex:1, height: 350, width: undefined}}
   source={require('../images/mash_paper.jpg')}
   resizeMethod="resize"
   resizeMode="contain"
 />
 <Text style={material.subheading}>{'\t'}(This person is also
    responsible for making up 'bad' selections such as a type of transportation being a bus or having
    only $20 in the bank, all in the effort of spicing up the game.) </Text>

  <Text style={material.subheading}>{'\t'} After all the categories are filled with responses, the fortune teller starts to draw a
      spiral on the paper sort of like this: {'\n'} </Text>
      <Image
     style={{flex:1, height: 300,width: undefined}}
     source={require('../images/magic_number.jpg')}
     resizeMode="contain"/>
     <Text style={material.subheading}> and continues to do so until the fortune seeker tells him to stop. </Text>
   <Text style={material.subheading}>At this point, the fortune teller counts the number of lines drawn starting with dot at the center
     to the outer most one. This is our <Text style={{fontWeight: "bold"}}>magic number</Text>.
   </Text>
 <Text style={material.subheading}> Our fortune teller
  crosses off every nth item in the list, where we set n equal to the magic number, making sure to keep at least one item in every category, until he or she cannot cross off any more.</Text>
<Text style={material.subheading}> And voila! You have your very own fortune! {'\n'} </Text>
  <Image
 style={{flex:1, height: 350,width: undefined}}
 source={require('../images/mash_result.jpg')}
 resizeMethod="resize"
 resizeMode="contain"/>

<Text style={material.subheading}> If you want to read more about how <Text style={material.title}>M.A.S.H. Adventure</Text> differs from the traditional game, head over to the
about section where I break down how I wrote the logic and took the game's idea and ran with it.</Text>


   <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.aboutMashButtonStyling}>
 <Button color="#d34e4e" title="Let's Play!"  onPress={() =>
     navigate('Profile')  }/>
 </Animatable.View>

 <Button color="#6d88ac" title="Home"  onPress={() =>
       navigate('Home')  }/>


</ScrollView>

</View>





    );
  }
}
