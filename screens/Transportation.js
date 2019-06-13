import React from 'react';
import { Text, View,  Image, Button, TextInput,KeyboardAvoidingView, Keyboard} from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class TransportationScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {v1: '', v2: '', v3: ''};
  }
  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  validateAndNavigate = () => {

  //console.log("Let's validate & navigate!");
  if(this.state.v1 != '' && this.state.v2 != '' && this.state.v3 != ''){
   this.props.navigation.navigate('Money_In_Bank', {
          profile: this.props.navigation.getParam('profile', 'default profile'),
          love_interest: this.props.navigation.getParam('love_interest','def love_interest'),
          cities: this.props.navigation.getParam('cities','def cities'),
          no_kids: this.props.navigation.getParam('no_kids','def no_kids'),
          professions: this.props.navigation.getParam('professions','def professions'),
          vehicles: {
           v1: this.state.v1,
           v2: this.state.v2,
           v3: this.state.v3,
         },

          })
  }
  else{
    alert("Please fill in all values");
  }
  Keyboard.dismiss();
  }
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
  //  console.log("in vehicles");
  //  console.log( this.props.navigation.state.params);
    return (
      <View style={styles.parentViewStyling}>

 <Text style={styles.questionStyling}>Choose three modes of transportation</Text>

   <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
           <Image
         style={{flex:2, height: undefined, width: undefined}}
         source={require('../images/transportation.png')}
         resizeMode="contain"
       />
   </Animatable.View>

      <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
      <TextInput
         style={{height: 40}}
         placeholder="I make an entrance wherever I go"
          underlineColorAndroid="#33afc3"
         onChangeText={(v1) => this.setState({v1})}
       />
       <TextInput
          style={{height: 40}}
          placeholder="It gets me from A to B"
           underlineColorAndroid="#33afc3"
          onChangeText={(v2) => this.setState({v2})}
        />
        <TextInput
           style={{height: 40}}
           placeholder="Sometimes I don't get to B"
            underlineColorAndroid="#33afc3"
           onChangeText={(v3) => this.setState({v3})}
         />
         </KeyboardAvoidingView>

         <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
      <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
      </Animatable.View>
   </View>
    );
  }
}
