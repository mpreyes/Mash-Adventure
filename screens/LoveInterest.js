
import React from 'react';
import { Text, View, Image, Button, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';

export default class LoveInterestScreen extends React.Component {

  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  constructor(props) {
    super(props);
    this.state = {l1: '', l2: '', l3: ''};
  }

  validateAndNavigate = () => {

  //console.log("Let's validate & navigate!");
  if(this.state.l1 != '' && this.state.l2 != '' && this.state.l3 != ''){
   this.props.navigation.navigate('Cities', {
          profile: this.props.navigation.getParam('profile', 'default profile'),
          love_interest: {
            l1:this.state.l1,
            l2:this.state.l2,
            l3: this.state.l3,
          }
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
  //  console.log("In love interest");
  //  console.log( this.props.navigation.state.params);
    return (
      <View style={styles.parentViewStyling}>
      <Text style={styles.questionStyling}> Choose three love interests</Text>

        <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
                <Image
              style={{flex:2, height: undefined, width: undefined}}
              source={require('../images/love_interest.png')}
              resizeMode="contain"
              resizeMethod="resize"
            />
        </Animatable.View>

            <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
          <TextInput
             style={{height: 40}}
             placeholder="Best love interest, hands down"
             underlineColorAndroid="#33afc3"
             onChangeText={(l1) => this.setState({l1})}
             onSubmitEditing={this.submitEdit} 
           />
           <TextInput
              style={{height: 40}}
              placeholder="We could make it work"
              underlineColorAndroid="#33afc3"
              onChangeText={(l2) => this.setState({l2})}
            />
            <TextInput
               style={{height: 40}}
               placeholder="DEAR LORD WHY"
               underlineColorAndroid="#33afc3"
               onChangeText={(l3) => this.setState({l3})}
             />
          </KeyboardAvoidingView>


          <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
       <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
       </Animatable.View>

      </View>
    );
  }
}
