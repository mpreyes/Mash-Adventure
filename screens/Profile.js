import React from 'react';
import { Text, View, Image, Button, TextInput,KeyboardAvoidingView, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../Styles/Styles';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  constructor(props) {
    super(props);
    this.state = {name: '', age: '', color: ''};
  }

  validateAndNavigate = () => {
//  console.log("Let's validate & navigate!");
  if(this.state.name != '' && this.state.age != '' && this.state.color != ''){
   this.props.navigation.navigate('Love_Interest',
          { profile:
          {
          name: this.state.name,
          age: this.state.age,
          color: this.state.color
        } })
  }
  else{
    alert("Please fill in all values");
  }
  Keyboard.dismiss();
  }

  render() {
    const { navigate } = this.props.navigation;


    return (

        <View style={styles.parentViewStyling}>

        <Text style={styles.questionStyling}> Tell me about yourself</Text>

          <Animatable.View animation="fadeInDown"  direction="alternate" style={styles.imageViewStyling}>
                  <Image
                style={{flex:2, height: undefined, width: undefined}}
                source={require('../images/profile.png')}
                resizeMode="contain"
              />
          </Animatable.View>

          <KeyboardAvoidingView style={styles.textStyling} behavior="padding">
       <TextInput
          style={{height: 40}}
          placeholder="Name"
          underlineColorAndroid="#33afc3"
          onChangeText={(name) => this.setState({name})}
          onSubmitEditing={this.submitEdit} />
        <TextInput
           style={{height: 40}}
           placeholder="Age"
           underlineColorAndroid="#33afc3"
           onChangeText={(age) => this.setState({age})}

         />
         <TextInput
            style={{height: 40}}
            placeholder="Favorite Color"
            underlineColorAndroid="#33afc3"
            onChangeText={(color) => this.setState({color})}
          />

      </KeyboardAvoidingView>


      <Animatable.View animation="zoomIn" style={styles.buttonStyling}>
   <Button title="Next" color="#d34e4e" onPress={this.validateAndNavigate}/>
   </Animatable.View>
      </View>
    );
  }
}
