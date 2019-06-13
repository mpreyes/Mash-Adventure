import React from 'react';
import { Text, View, Button, Linking, ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';
import { material } from 'react-native-typography';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'M.A.S.H.',
  };
  constructor(props) {
    super(props);
  }


  render() {
    const { navigate } = this.props.navigation;

    return (

        <View style={styles.parentViewStyling}>
         <ScrollView style={styles.textStyling}>
        <Animatable.Text animation="lightSpeedIn" style={[material.display2]}>About M.A.S.H. Adventure</Animatable.Text>


          <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
       <Text style={material.title}> The idea for M.A.S.H. Adventure</Text>
     {'\t'} came to me after a few nights of nothing to do due to being bedridden after an unfortunate accident. 
     Most of those days were spent writing the logic for the actual quiz portion of the game, writing stories, and cobbling pictures together to bring
     you what I finally called M.A.S.H. Adventure.
   </Animatable.Text>

      <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
      {'\t'} As a little girl in the 6th grade, I loved grabbing a piece of paper
     and pencil and getting together with my friends to play the traditional version of M.A.S.H. 
     I would come up with ridiculous stories to serve as background for their fortunes, and the idea to add an 
     element of storytelling stuck with me. This game combines my all my favorite childhood pastimes: M.A.S.H., 
      choose your own adventure books, and good old fanfiction. There are eleven possible endings in this first version, so I hope you 
      get a chance to read them all. As a side note, I started out writing these stories as gender neutral as possible so that both
      guys and girls could play the game, but it was soon made clear that it was hard to write a story that way. So if you're reading a story
      that has a set gender for a character, feel free to replace them with whoever you want in your mind.  {'\n'}

     </Animatable.Text>
     
     <Animatable.Text animation="fadeInUpBig" style={material.subheading}>
     {'\t'} I hope this is as fun to play as it was to create!
    {'\n'}

       </Animatable.Text>

          <Text>Thanks to
                    <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.vecteezy.com')}> Vecteezy</Text> for allowing me to mutilate their images.  {'\n'}
          </Text>

        <View style={styles.buttonSoloStyling}>
          <Button title="Home" color="#4e91d3" onPress={() =>  navigate('Home') }/>
          </View>
      </ScrollView>
      </View>
    );
  }
}
