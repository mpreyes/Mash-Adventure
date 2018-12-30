import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, TextInput,Alert, ScrollView, TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 2.5.5
import * as Animatable from 'react-native-animatable';
import ProfileScreen from './Profile';
import MashScreen from './Mash';
import LoveInterestScreen from './LoveInterest';
import CitiesScreen from './Cities';
import No_KidsScreen from './NoKids';
import styles from '../Styles/Styles';
import resultStyle from '../Styles/resultStyle';
import { material } from 'react-native-typography';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';



function calculateMash(quiz){
let profile = quiz.profile;
let user_number = quiz.number;
delete quiz.profile;
delete quiz.number;
let number = +user_number.quiz_num;
//console.log("quiz status");
//console.log(number); 
let deleted = 0;
let done = false;
let count = 1;
let passes = 0;
let items = 0;
while(done == false){
  for(let key in quiz){
    let obj = quiz[key];
    for(let sub in obj){
        if(Object.keys(obj).length == 1){
          items++;
          continue;
        }
        if(count % number ==  0){
          // console.log(count + " DELETED " +" " + sub + " " + obj[sub]);
           delete obj[sub];
           deleted++;
       }
       else{
          // console.log(count + " " +" " + sub + " " + obj[sub]);
       }
          count++;
    }

  }
  if(items == 8){ //if we pass through each object and delete nothing
    done = true; //we are done
  }
//  console.log("passes: " + passes); //number of passes
  items = 0;
  passes++;

}
//console.log("Reported answer");
let resultsArray = [];
for(let key in quiz){
  //console.log( Object.values(quiz[key])[0]);
  resultsArray.push(Object.values(quiz[key])[0]);
}
return resultsArray;
}


export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
     // this.state = {TextInputValueHolder: ''}
  }

  static navigationOptions = {
    title: 'Results',
    headerLeft: null,
  };




  render() {
    const { navigate } = this.props.navigation;
    const  { navigation } = this.props;
    const profile = navigation.getParam('profile',{name: "Madelyn",age: "21", color: "Blue",});
    const numbers = navigation.getParam('number',{quiz_num: -1,story_num: -1,});

   let res = calculateMash(this.props.navigation.state.params);
    console.log(this.props.navigation.state.params);
    

    if(numbers.story_num == 0){

      return(

        <View style={resultStyle.resultsParentStyle}>
      <ScrollView style={resultStyle.rand_0}>
        <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Traditional M.A.S.H Ending</Animatable.Text>

     <Text style={material.titleWhite}>The wheel of fortune says you will,</Text>

         <Image
     style={{flex:1, height: 300, width: undefined}}
     source={require('../images/fortune.png')}
     resizeMode="contain"
   />

       <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
       {'\t'}live in {res[2]} and drive a {res[5]} to school. After graduating, you 
       will work as a {res[4]} and marry {res[1]}. After some years, you will have ${res[6]} saved up and  
       live in a lovely {res[0]}. You will have a pet {res[7]} and raise {res[3]} children together. 
       
     </Animatable.Text>
     <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
     {'\t'}Yay?
   </Animatable.Text>
   
     <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
   <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
       navigate('Home')  }/>
   </Animatable.View>

</ScrollView>
 <AdMobBanner
 adSize="fullBanner"
 adUnitID="ca-app-pub-5432616899214952/8522331318"
 testDevices={[AdMobBanner.simulatorId]}
 onAdFailedToLoad={error => console.error(error)}
/> 

</View>


     );

    }

    else if(numbers.story_num == 1){
      return(

        <View style={resultStyle.resultsParentStyle}>
         <ScrollView style={resultStyle.rand_1}>
           <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Spooky Ending </Animatable.Text>

         <Animatable.Text animation="slideInLeft" style={material.titleWhite}>It was a cold and dark night. quiz num: {numbers.quiz_num} story num: {numbers.story_num}</Animatable.Text>
        <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
        {'\t'}You had just come home from
        work as a {res[4]} and were getting ready for bed when suddenly you notice a shadow at your window.
        You begin to panic for a little until you remember that your neighbor's cat been
        rummaging through your garbage for the past few nights. Assuming that the shadow outside is
        the cat's doing, you continue getting ready for bed. You pull on your {profile.color} and white pj's and turn off your
        bedroom lights. As you draw the covers up to your chin, you start getting
        second thoughts.
      </Animatable.Text>
      <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
        {'\t'}Forgoing the comfortable bed you were going to climb into, you head downstairs
        and resolve to check in on your pet {res[7]}. Seeing that it was safely in its sleeping place,
        you plop onto the couch and text your significant other, {res[1]}, to wish them a good night. Long distance relationships
        weren't easy. What with you in {res[2]} and them still living in your old hometown, it meant
        that most weeks FaceTime was the only way to see their face. No matter. You and your
        significant other were doing it to save money. Speaking of money, it was Friday.
        And what's better than a regular Friday? A payday Friday! You open up your banking app
        and check your bank account. ${res[6]}? That couldn't be right. They didn't pay me this week!
        You decide to take it up with your boss in the morning. There were already enough problems at work
        as it was for them to forget to pay you.
      </Animatable.Text>
      <View>
          <Image
        style={{flex:1, height: 300, width: undefined}}
        source={require('../images/spooky.png')}
        resizeMode="contain"
      />
    </View>
      <Text style={material.subheadingWhite}>
        {'\t'}Lost in your thoughts, you fail to see the
        creepy shadow outside your {res[0]} move closer towards you. Somehow you had missed the
        fact that your back door had been quietly opened. Suddenly, the lights turn off. You turn around
        just in time for a hand to move towards your throat.You punch your assailant with
        all your might and turn and head for the door. Screaming bloody murder, you scan through your mental database
        of scary movies in the hopes of something useful.
      </Text>
        <Text style={material.subheadingWhite}>
        {'\t'}As you approach your neighbors house, you slow down your steps to try and hear if someone's behind
        you. Nothing. Just the sound of the breeze and the little chimes you had given your neighbor for
        Christmas. You turn towards your {res[0]} to see that the lights had come back on in your place. A familiar looking person is slowly
        limping towards you. You squint a bit harder as the person walks near. It was {res[1]} who had come home
        to surprise you. And you had broken their nose.

      </Text>

        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
      <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
          navigate('Home')  }/>
      </Animatable.View>


    


  </ScrollView>
   <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 

</View>


      );

    }
    else if(numbers.story_num == 2){
      return(

         <View style={resultStyle.resultsParentStyle}>
       <ScrollView style={resultStyle.rand_2}>
         <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Futuristic Ending</Animatable.Text>

      <Text style={material.titleWhite}>It's the year 2049.</Text>
        <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
        {'\t'} Cancer is cured. People commute on flying bikes. Your phone turns into a watch and has a holographic display like Iron Man's.
         Girl jeans have front pockets now. You live in {res[2]}, but it's not like the {res[2]} of olden days. More people live there, and traffic is a thing of the past. You have a robotic {res[7]} as your pet. 
        It's a pretty good pet, considering that it feeds and cleans itself. You have your {res[5]} in the garage but don't drive it anymore,
         since public transit gets you to work in five minutes and costs next to nothing. You work as a {res[4]}, but only part time on account 
         of not really needing to. Your bank account is pretty decent. Last time you checked it was at ${res[6]}, enough to retire in Hawaii 
         if you so desired. (Today's dollar is not the same as the dollar in your grandma's day) You live in a {res[0]}, equipped with the latest A.I. to take care of all your needs. Need your pantry restocked?
         Bowie's got it done already. Need to buy fresh towels? Bowie took a note of that last week and is getting them delivered. Your floor looks pretty clean. That's because Bowie cleans every monday.
         (And yes you really did name your A.I. bowie)
      </Animatable.Text>
      <Image
      style={{flex:1, height: 300, width: undefined}}
      source={require('../images/bowie.png')}
      resizeMode="contain"
    />

      <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
      {'\t'}You and {res[1]} met online using a matching service that predicts, with 99.99% accuracy, who your life partner should be.
       You really love the neighborhood you live in, since the kids (you have {res[3]} of them) go to a really good school.
      There are a total of 5 teachers at a school that teaches 300 kids. The Advanced Education Robotic Droves (or AERDs for short) take care of most 
      of the teaching nowadays. But when the kids come home and it's ready for bed, you still pick up a book (yes a real book) and read to them every night.
       It's pretty great in the future. 
    </Animatable.Text>

      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
    <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
        navigate('Home')  }/>
    </Animatable.View>

</ScrollView>
 <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
  /> 

</View>


      );

    }
    else if(numbers.story_num == 3){
      return(
        <View style={resultStyle.resultsParentStyle}>
        <ScrollView style={resultStyle.rand_3}>
          <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The UMG Ending</Animatable.Text>

       <Text style={material.titleWhite}>  </Text>
         <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
         
       </Animatable.Text>
 


       <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
     <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
         navigate('Home')  }/>
     </Animatable.View>

 </ScrollView>
 <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 

 </View>

      );

    }
    else if(numbers.story_num == 4){
      return(
        <View style={resultStyle.resultsParentStyle}>
        <ScrollView style={resultStyle.rand_4}>
          <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Plain Vanilla Ending</Animatable.Text>
       <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
         <Text style={material.titleWhite}> {'\t'}You will ,quiz num: {numbers.quiz_num} story num: {numbers.story_num}</Text>
       live in a {res[0]} in {res[2]},
       <Text style={material.subheadingWhite}> work as a {res[4]}, ride in a {res[5]}, </Text>
       <Text style={material.subheadingWhite}>and have a {res[7]} as a pet.</Text>
       <Text style={material.subheadingWhite}>You currently have ${res[6]} in your bank account, and are thinking of trying something new with your hair. </Text>
      <Text style={material.subheadingWhite}>After a some time, you will meet and fall in love with {res[1]}, get married, and vacation in the Bahamas. </Text>
      <Text style={material.subheadingWhite}>After you've bought a sizeable house, you will have {res[3]} kids together and inevitably trade your {res[5]} for a minivan. </Text>
      <Text style={material.subheadingWhite}>You and {res[1]} will grow old and retire, where you will spend your days gardening, meeting friends at the country club, and taking
      your RV on cross country trips.</Text>
     </Animatable.Text>
     <Text style={material.subheadingWhite}>Yeah this will be your life, I guess... No toppings, no sauces... you didn't even get the cute little peanuts you see on sundaes... Just vanilla ice cream...
     </Text>
         <Image
       style={{flex:1, height: 300, width: undefined}}
       source={require('../images/vanilla.png')}
       resizeMode="contain"
     />
   <Text></Text>

       <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
     <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
         navigate('Home')  }/>
     </Animatable.View>

 </ScrollView>
 <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 

 </View>

      );

    }
    else if(numbers.story_num == 5){
      return(  <View style={resultStyle.resultsParentStyle}>
       <ScrollView style={resultStyle.rand_5}>
         <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Worst Ending</Animatable.Text>

      <Text style={material.titleWhite}>Well, it looks like you pissed the game creator off. quiz num: {numbers.quiz_num} story num: {numbers.story_num}</Text>
        <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
        {'\t'} For your fortune you will live in a {res[0]} but after six months of living there, you will lose your home 
        to a freak tornado and have to live in a cardboard box. The love of your life {res[1]} would have married you, but 
        they decided that they wanted to move to China to become a monk instead. So no kids for you.  {'\n'}
        {'\t'} Alone and homeless you move to {res[2]}, only to realize that the job market for {res[4]}s is so oversaturated 
        that you can't find a job in the field you graduated from. So you turn to driving school buses for a living. It wouldn't be too bad of
        a job if the kids actually behaved and listened to you. Most days you were lucky to get the kids home without at least one of them crying. {"\n"}
      </Animatable.Text>


         <Animatable.View animation="fadeInUpBig" style={{paddingVertical: 15}}>
             <Image
                style={{flex:1, height: 300, width: undefined}}
                source={require('../images/bus_driver.png')}
                resizeMode="contain"
              />
                <Text style={[material.captionWhite,resultStyle.textCaption]}> That's not you. That's a model they hired to pose as you for the school's newspaper. </Text>
              </Animatable.View>

  <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>

  {'\t'} You bank account used to have ${res[6]} in it, but you spent most of your money buying a ticket to China to convince {res[1]} to change their mind. They didn't.  {'\n'}
  {'\t'} Aside from working, you spend your free time driving around in your {profile.color} {res[5]} and playing with your {res[7]}, which
  are the only things that really give you joy in life anymore. 

</Animatable.Text>
  

      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
    <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
        navigate('Home')  }/>
    </Animatable.View>



</ScrollView>
 <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 
</View>
      );

    }

    else if(numbers.story_num == 6){
      return(   <View style={resultStyle.resultsParentStyle}>
       <ScrollView style={resultStyle.rand_6}>
         <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Out Of This World Ending</Animatable.Text>

      <Text style={material.titleWhite}>The 7:45PM layover flight that you were supposed to be taking to {res[2]} was delayed.</Text>
        <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
        {'\t'}The tropical storm, extremely unusual for this time of year, delayed all flights out of the city which meant that 
        you were tasked with finding a place to sleep for the night. You sat down on one of the hard plastic airport chairs at your terminal and
        looked online for places nearby with rooms available. After about twenty minutes of looking, you realized that every single room nearby was booked. 
        This being the holiday season meant that the airport was packed, and it looked like most people had already accepted their fate and made themselves as comfortable as they could
        to wait things out overnight. You continued to look, calling hotels, hostels, bed and breakfasts, without any luck. On the 5th page of google results, you see something that catches your eye.
        "SMALL ROOM, daily rates- $90. No pets as the alien is afraid of them." Hmm. maybe they were trying to be funny. You give the owner a call, and
        they tell you the room is still open. You thank the man and tell him you will be on your way.
      </Animatable.Text>
      <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
      {'\t'} You grab a taxi from the airport and make your way to the address that he provided. The road to the house is narrow and winding, making
       it so that the cab driver has to slow down to take the turns. After almost an hour of driving, the driver drops you off in front of a
      small, but nice looking house. You walk to the front door and ring the doorbell, and a tall thin man with beady eyes and long hair answers. He talks with 
      a unmistakeable surfer dude accent as he takes your payment information and ushers you inside. "So, like, I just cleaned the room so hopefully it will float your boat."
      He says as he opens the door to your room, which is unexpectedly clean and nice smelling. "Let me know if you need anything. Sadie should come visit you
      soon." You're putting your bags in the closet as he says this, and you look up. "Sadie?" you say. "Yeah, it's what I called my new alien 
      friend. She likes to show you things. It's totally rad." With that, he gives you a peace sign and closes the door behind him. Whatever
      he was smoking was sure potent. You quickly get ready for bed and turn off the lights. 
    </Animatable.Text>
    <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
    Just as you're getting settled in bed, you hear a creak. The door cracks open and yep its an alien, peeking out to look at you. You stare at 
    it for a full ten seconds before it moves inside and shuts the door. It's relatively small, with giant floppy eyes and a round body of a weird 
    yellow color. By this point, you're too exhausted to even be scared. It motions to get closer and you nod, sitting up to get a closer look.
     It hops onto the bed with amazing agility and extends one of it's floppy appendages to your forehead.
    </Animatable.Text>
        <Image
      style={{flex:1, height: 300, width: undefined}}
      source={require('../images/alien.png')}
      resizeMode="contain"
    />
          <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
      {'\t'} At first, when the alien touches your forehead you don't feel anything. Then a rush of images fill your head. 
      You walking through the airport. You just barely making it to your plane on time. Putting on your seatbelt and watching the 
      safety demonstration. Laughing at a joke your seatmate made that you can't make out. Then, the plane shaking. Faces filled with fear.
      Someone crying in the background. The air masks hitting you in the face. Gasping for air. It all goes dark. You can't see anything. 
    Then it's like the TV in your mind changes channels. Now you're at the beach walking. Up ahead you see {res[1]}, an old friend 
    of yours that you hadn't seen in years. They're laughing and talking to you, and when you look down you're surprised to be holding their
    hand. Now the image flips and you're at a church saying your vows and getting married. Flash forward and you see yourself climb into your {res[5]} to get to work.
     You're a {res[4]} now, and you really enjoy what you do. You see your pet {res[7]} on the front porch of your {res[0]} while your {res[3]} kids play tag in the yard. 
    You see yourself grow old and watch your kids go off to college. Then, it's just the two of you living in your house. You use your savings of ${res[6]} to buy a nice getaway vacation. 
    It's the last one you take before {res[1]} passes away during the night. Now you're alone. 
    You see the years melt away and your body grow frail and weak. Finally the images go dark.  {'\n'}
    </Animatable.Text>

     <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
     {'\t'} The alien removes its hand from your forehead and emits a sound that could only be described as a giggle. It walks out 
     of your room and closes the door. You try to go back to bed, but you can't sleep. You toss and turn at night, thinking about 
     what the alien had shown you and wondering if the man had slipped you something to make you hallucinate. But no... you hadn't drank or eaten anything
     since the airport. Maybe it was a prank? Or some sort of weird experiment? In the end you do manage to fall asleep, although your thoughts keep you up far longer than you would have liked to.{'\n'}
     </Animatable.Text>

      <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
      {'\t'}In the morning, you head downstairs to talk to the man.
       "You know the alien you said would come? It came. It showed me things... Did it show me what's going to happen? Is my plane going to crash if I'm on it? What's going on?"
      He looks at you and gives you a slight smile. "Yes. And no. Sadie knows more than us mere mortals could ever know. You should listen to her." He gives you a smile. 
       "See you later dude." Then the man grabs his coat and walks out of the house. You call a taxi to come pick you up and take you back to the airport. Once you reach your gate 
       you stop. You can't bring yourself to hand the attendant your ticket. You turn around head back to the front desk and ask for an alternative flight. {'\n'}
     </Animatable.Text>


      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
    <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
        navigate('Home')  }/>
    </Animatable.View>
</ScrollView>

 <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 
</View>

      );

    }
    else if(numbers.story_num == 7){
      return(

        <View style={resultStyle.resultsParentStyle}>
        <ScrollView style={resultStyle.rand_7}>
          <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Fairy Tale Twist Ending</Animatable.Text>

       <Text style={material.titleWhite}>"{profile.name}! Come back this instant!"</Text>
         <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
         {'\t'}An oh so familiarly shrill voice makes you turn around and climb down the steps you had just walked up. 
         Oh boy. What did they want this time? After your mother died, you father had taken upon himself to find a wife that 
         would, in theory, still give you the motherly affection a growing child like you needed. Too bad that your new stepmother was about 
         as motherly as a frying pan. Still, it wouldn't have been that bad if it was just her. The two daughters she brought with 
         her were the real taskmasters. Lazier than sloths and only slightly more coordinated than a newborn giraffe, the crown jewels 
         in their mother's tiara were accustomed to a full staff catering their every need. This would have been possible had the trio 
         of ladies minded their finances as much as they did the latest gossip circulating around town. After your father left for 
         an expedition south and never came back, (a letter had come saying that he caught pneumonia and died but you knew your father, he probably ran off to avoid his mounting debts)
         the ladies used their "grief and melancholy" as an excuse to go shopping stating that it was to "help them cope" with these trying times. So up went the debt and down came the income forcing them to let all their staff go 
         making you a sort of jack of all servant trades or something. Still, if it hadn't been for the will that your father left saying that you would inherit the house
         at {+profile.age + 1} so long as you lived there, you would have left a long time ago. And as long as your stepfamily 
         lived in the house they ran the show. Which meant that you were tasked with picking up after them or let your only inheritance go down in ruins.  {'\n'} 
       </Animatable.Text>
       <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
       {'\t'} So there you were, waiting for a year to pass so that you could take control of your life again. Cleaning had always been 
       therapeutic for you so it wasn't unbearable, but you had grown weary of their increasing demands as time went on. They knew that you were only here
       because you had claim to the house, and oh boy did they ever take advantage of that fact! But you had dreams to achieve. You had always wanted 
       to be a {res[4]}, and you only had to wait so that you use your house as a place to work. As you went back to see what your stepmother wanted, you resolved to stay as cool as possible.
       You walked into your stepmother's room and grabbed the breakfast tray. "{profile.name}, dear" your stepmother called. "I need you to be a doll and scrub the floors downstairs. You know
       how dirty they get down there. Oh and can you mend these dresses for me?" She pointed to a mountain of dresses on a chair next to her. "You are rather good at that, at least. Us ladies
       need to look our best when out in town you know. I won't be able to marry my girls off if they look anything less than perfect." you 
       nod your head and head to the kitchen to drop off the dishes. When you came back, she had even more things for you to do. "Oh and after
        you do the usual cleaning, can you be ready to get the mail when it comes? I hear there's something important that's headed our way!" You 
        nod you head apathetically. You couldn't care less about all the parties they were invited to, as long as they left you with nothing to do while 
        they were gone. You head downstairs and commence the cleaning.  {'\n'}
        </Animatable.Text>
        <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
        {'\t'} After preparing lunch for the house, you start on the mopping. The large hall meant for hosting parties was no small feat to clean. 
        You had just barely finished, when you hear a knock at the door. You drop the mop back in the bucket and open the door. About twenty of the king's 
        men in their full regalia, we standing at your door. "Good afternoon. We are here on behalf of the King to deliver a very special invitation." 
        Your stemother wasn't kidding, it was very important. The king hadn't thrown a ball in years. "Our Royal Highness, Prince(ss) {res[1]} is throwing 
        a ball in honor of their {+profile.age + 2} birth years and requires all young ladies and gentlemen to attend this most important event." He hands you 
        an impressive looking invitation decorated with gold ink. "Our heir will also choose a consort on this momentous occation, as dicated by laws passed during the reign of King Gregory IV."
        He bows to you and the whole party moves on to the next house. You look at the invitation, ready to faint. This was your chance. You'd be in the presence 
        of the most important people in the Kingdom. Surely, there would be someone needing a {res[4]}'s apprentice! You head back upstairs and give your stepmother
        the invitation. She squeals with anticipation and runs to tell her girls. In the following days that ensue, there's more activity in the house than 
        you had seen this past year. You're kept busy with all the dress fittings, face treatments, and hair arrangements that your sisters insist are 
        necessary for a ball of this magnitude. In the midst, you manage to spin your idea to your stepmother to which she hesitantly agrees. "You may go." she says.
        "But you must procure your own gown and transportation. You know we can't afford any more than what I'm spending and our carriage only fits three." You 
        knew this was all a lie, they would have had the money if they weren't spending so much on themselves, but you shrugged it off. They weren't cruel, per se. Only selfish, lazy, and entitled.
         You hadn't expected any other response. "And you will also need to be back in time to help us disrobe. We will leave the ball at 12:30pm sharp. You must be home by midnight to be ready for us." 
         You could live with that. {'\n'}
        </Animatable.Text>
        <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
        {'\t'} So now, you're tasked with finding something to wear for this ball. Good thing your mother had been a fashionable lady. Even better, she had birthed a smart child
         who knew that if they didn't preserve some of their mother's things, the new lady of the house would have sold them to pay for her stepsisters expenses. You grab the most beautiful garment your mother posessed and 
        head into town. You didn't have enough money for a whole new costume, but at least you could afford for it to be tailored and upgraded to the latest fashion.
        Walking along the busy streets of your town made you happy. You smiled at the children playing and waved to all the people you had grown up with who you didn't see 
        nearly quite so often. You make your way into the only dressmaker's shop in your town. "I want to see if you can do anything with this." you tell the attendant.
         "Can you make this into something suitable for the king's ball?" She frowns and takes the garment from you. "I don't know about this. You want it tailored and made 
         into something suitable for the king's ball?" she scoffs "We can tailor it all right. But this is nowhere near fancy enough for a ball, dear. This kind of thing is beyond me." 
         She hands you your clothes and walks back. You walk out of the shop, feeling a bit deflated. The only other option is to walk to the shops closest to the palace

         As you make your way there, you see an old lady struggling to load her vegetables into her cart. You carefully place your dress on the edge of the cart, careful to 
         keep it out of the mud, and begin to help her. "Young people these days don't have a care in the world for us old folks." she tells you. 
         "Good to know there are still some good ones around." You smile and bend to reach a stray vegatable that had escaped to the side of the road, when your hand meets another. 
         You straighten up and look into the most beautiful eyes you had ever seen. "Sorry." you say. "It's no trouble at all."


         As they move to put the vegetable back in the cart, the precariously placed gown falls into the mud. You stare at it, dumbfounded. Now 
         you wouldn't have anything even remotely decent to wear to the ball. "I'm so sorry! They exclaim. Was that yours?" They move to pick it up.
         "Its alright. Fixing it was hopeless anyways. Maybe I'll go to the ball next year." You 

         "Are you going to the ball?" they ask. "Well, I was planning to but I didn't really have anything to wear. I was taking this to the seamstress to 
         see if she could tailor it for me. "

         

        </Animatable.Text>


         <Image
       style={{flex:1, height: 300, width: undefined}}
       source={require('../images/spooky.png')}
       resizeMode="contain"
     />
      <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
      {'\t'} Soon enough it's the day of the ball. Your stepfamily leaves before you in the carriage, so you are forced to walk to town to ride one of the many hired carriages
      going to the palace. As you enter the massive grounds of the king's estate, you begin to feel a little less confident. You see more people walking through the front doors than you
      have ever seen in your entire life! You head inside and are presented with a large ornate dance hall, big enough to fit five or six houses inside of it.  
      So this is what you had been missing? All this time you had imagined balls to be boring and tiresome events, (this was in your imagination of course, you had never actually 
      been to one) but the display before you was lively and fascinating. All the ladies had dressed to the nines, with colors from every shade of 
      the rainbow and jewelry that must have been so expensive it made your head spin. You walk through the crowd, admiring the sights and eventually find a large pillar to lean against. 
      "Okay so how do I do this?" you wonder aloud. You didn't have the slightest idea as to where these people worked or how you would find that out.
      "Maybe I could try to eavesdrop?" 
      </Animatable.Text>
  <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
      A familiar voice interrupts your thoughts. "What's your mission? Are you looking for a suitable match, perhaps?" You look up to an impeccably dressed person 
      wearing a mask and slightly mischevious smile. "Why yes I am. Know any {res[4]}s around here?" The smile dissapears. You eleboarate, smiling. "I'm looking for someone who will take me on as an apprentice. Although I haven't the faintest idea
      as how to do that. Any thoughts? " The smile returns. "I might know a couple of people in that profession. I could introduce you if you like... but what's in it for me?"
      you knew what they were getting at. "How about a dance?" you say. "That should be more than enough payment for a couple of introductions." 
      They affirm your proposal by leading you out to the dance floor. There's something magical about dancing late in the evening, wearing the most 
      impressive piece of clothing you had ever known, and looking into the face of one of the most beautiful people you had ever met.
      "So, I never got the chance to ask." you begin as you walk outside to take a break from the dancing. "What is it that you do around here?"
      The night is near perfect and the time seems to melt away until you hear the unmistakeable sound of the bells signaling it was almost midnight.

      </Animatable.Text>


   

     <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
     {'\t'}"I'll offer you the position." You turn around to see {res[1]} walking towards you. "Come and work for me at the palace. The most sought out instructors are there, ready to pass on their craft. You would want for nothing."
     They move towards you and take your hand. "And I want you become my consort. For you are the only one that would ever do." A job and a marriage offer all in one? 
     You weren't about to pass this deal up. With tears in your eyes, you nod you head and accept. {'\n'}
    </Animatable.Text>

    <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
    After the wedding you moved into the palace, and began your professional and etiquette training. After some years and a lot of hard work, you 
    became the royal {res[4]}, tasked with providing your services to the crown and kingdom. Your stepmother and stepsisters took the news of your marriage remarkably well.
     After learning that they would, in fact, be able to keep the house, they set out to redecorate the place and make it presentable enough to throw parties and soirees. Your step-sisters managed 
     to get married to wealthy lords and your stepmother did well for herself, hosting wealthy travellers at her home. After some years, you and {res[1]} produced {res[3]} healthy heirs and even came into possesion of a pet {res[7]} 
      which you called slipper; He amused the children to no end (They would chant "We lost our slipper!") when he would suddenly slip off to a room in the house only to be found by {res[1]} and brought to his rightful place once again.{'\n'}
      And yes, you did live happily ever after.{'\n'}

     </Animatable.Text>

     <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
     <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
         navigate('Home')  }/>
     </Animatable.View>

 </ScrollView>
  <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 

 </View>

      );

    }
    else if(numbers.story_num == 8){
      return(
        <View style={resultStyle.resultsParentStyle}>
        <ScrollView style={resultStyle.rand_8}>
          <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Murder Mystery Ending</Animatable.Text>

       <Text style={material.titleWhite}>The crime scene was still fresh.</Text>
         <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
         {'\t'}The police had roped off the front of a nice looking {res[0]} with the unmistakeable yellow tape that told the neighbors that had gathered around to keep away. 
         You stopped by the front door, notebook in hand, and talked to Charlie, the officer in charge. "So Charlie, what do you know?" you say.
         He tells you. "Neighbors heard shouting and sounds of things being thrown. Next thing you know, they hear a bang.
         The victim's name is {profile.name}. Looks to be about {profile.age} years old. Spouse is nowhere to be found. Kids are gone too. According to 
         the neighbors, they have {res[3]}. The place is ransacked. Go on in, and take a look." You go inside, but before you do, you take note of the {res[5]} parked outside. 
         Once inside, you assess the scene and jot down some notes. The home is brightly lit, with big windows and white walls. You head into the living room, where forensic experts are collecting evidence. 
         There are pictures on the mantle above an unlit fireplace. Some pictures of the family. A picture of a {res[7]}, probably their pet. Some documents on the
         coffee table indicating that someone here worked as a {res[4]}. You head into the kitchen, where the murder was supposed to have ocurred. 
         You examine the body, but no visible gunshot wounds or trauma are found. The general consensus among the police is that the spouse might have used 
         an undetectable form of poison, but no one is sure until the lab results are confirmed.
       </Animatable.Text>
       <Image
       style={{flex:1, height: 300, width: undefined}}
       source={require('../images/detective.png')}
       resizeMode="contain"
     />

       <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
       {'\t'}After a thorough investigation, the police name the spouse {res[1]} as the main suspect. All they could gather is that the kids were dropped off at their grandparents before the murder occurred.
       Lab results were inconclusive and there was no explanation to the sound that the neighbors had heard.
       The police were never able to close the case. Before they could call {res[1]} to questioning, they dissapeared, taking most of the couple's savings (${res[6]} to be exact).
        It was rumoured that they ran off to a neighboring country to avoid the charges. To this day, no one knows where {res[1]} dissapeared to or exactly how the crime was commited. 
        It's one of the most famous murders that haunts the city of {res[2]} and inspires countless ghost stories told during halloween. 
       </Animatable.Text>


       <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
     <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
         navigate('Home')  }/>
     </Animatable.View>

 </ScrollView>
  <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 

 </View>

      );

    }
    else if(numbers.story_num == 9){
      return(

        <View style={resultStyle.resultsParentStyle}>
        <ScrollView style={resultStyle.rand_9}>
          <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Children's Fairy Tale Ending</Animatable.Text>

       <Text style={material.titleWhite}>It was a dark but calm night, when your mother took you outside for a walk.</Text>
         <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
         {'\t'}Well, 'step-mother' to be precise. She had been accustomed to a comfortable life growing up, and the fact that your father (nay the entire village)
         had fallen on hard times, did not sit well with her. The days grew wearier and wearier, and the meals smaller and smaller until all you and your
         friend {res[1]} (whom had been taken in by your family after an unfortunate fire) were given was half a loaf of bread and the remnants of the most
         watery cabbage soup imaginable. Your father tried his best, he really did, but a woodcutter's salary couldn't support four people in these times. 
         So your step mother came up with the brilliant idea of sending you off into the woods to 'forage for food'. She said she knew a part of the forest
         where wild berries grew aplenty and that it would be a feast like no other. 
       </Animatable.Text>
       <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
       {'\t'}
     </Animatable.Text>
         <Image
       style={{flex:1, height: 300, width: undefined}}
       source={require('../images/spooky.png')}
       resizeMode="contain"
     />
       <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
     <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
         navigate('Home')  }/>
     </Animatable.View>

 </ScrollView>
  <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 

 </View>

      );

    }
    else{
    return (
      <View style={resultStyle.resultsParentStyle}>
      <ScrollView style={resultStyle.rand_10}>
        <Animatable.Text animation="bounceInDown" style={[material.display2White,resultStyle.headline]}>You Got: The Magical Ending</Animatable.Text>

     <Text style={material.titleWhite}>You were walking home from school when it hit you. intro quiz num: {numbers.quiz_num} story num: {numbers.story_num}</Text>
       <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
       {'\t'} You had forgotten your lunchbox. Turning back, you groan and begin to sprint as fast as you can towards school. 
       It hadn't been a particularly great day; Your test grade had been lower than you expected, you spilled milk on your 
       favorite shirt, and your crush {res[1]} still didn't know you existed. 
     </Animatable.Text>
     <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
     {'\t'}As you're walking back home, a giant bird soars above your head. It's a beautiful thing, with streaks of red amongst 
     orange feathers. Seeing such a beautiful bird might have actually made your day a bit better. You had always liked
     animals, and birds held a special place in your heart. {'\n'} 
     {'\t'} You continue to walk, when suddenly something hits the top of your head. Hard. Your hand immediately goes to your head
     to assess the damage. You weren't bleeding, but could feel the beginnings of a bruise. You look around to see what might 
     have caused the trauma. Up ahead on the sidewalk lies a beautiful fire colored stone. You walk towards it, and pick it up. 
     Without having to look, you knew that the bird flying above you had dropped it. Maybe it had wanted to take it to it's nest and 
     dropped it on accident. It didn't matter. This was your payment for the bruise. You drop the stone in the pocket of
     your pants and finish walking back to your parent's {res[0]}. {'\n'}
     {'\t'} Living in {res[2]} was usually pretty decent. You had friends at school, amicable neighbors, and a room all to yourself.
      But you felt that you were missing <Text style={{fontStyle: 'italic'}}>something</Text>. You felt this urge 
      that you weren't doing something that you were supposed to do. And you couldn't figure out what it was. And on days like these, where everything felt like it was all
      wrong, the feeling of helplessness was strongest. You were thinking all of this as you walked through your front door. With a short greeting to your parents, you headed to your room. 
      You had quite a bit of homework to do. {'\n'}
      {'\t'} As you open the door, you're blasted with an intensely bright light. At first you thought it was a fire, but 
      upon closer inspection you realize it was that bird. It was <Text style={{fontStyle: 'italic'}}>glowing</Text>. 
      And it was standing on your bed. "Hey bird, get off my bed!" you call out. It doesn't move.
      "What are you doing here?" The bird gives you a blank look. "Yeah, I almost thought you were going to talk to me. Silly me!" you 
      laughed. "Do you want your stone back?" You put your hand in your front pocket to grab the stone. As you pull it back out
      from the place you had stored it, you hear a voice. "...yeah well this is what I get for trying to be a hero I guess. Some 
      mortal steals my stone." You look up. You could have sworn that the voice had been coming from the direction of 
      the bird. "Hey bird, do you know what I'm saying?" It looks back at you and blinks. You stand there for a second
      almost ready to pronounce yourself crazy, when suddenly you hear "Yeah, I can hear you. Can I have my stone back?
      I have to go home."  {'\n'}
      </Animatable.Text>

         <Image
     style={{flex:1, height: 300, width: undefined}}
     source={require('../images/wisdom_bird.png')}
     resizeMode="contain"
   />

           <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
      {'\t'} With that, you begin to look around. Maybe there were cameras hidden in your room and this was all just an 
      elaborate prank. "I know this is a prank guys. You can come out now! You got me." You wait for someone to come out, but
      no. Its just you and the bird still. "How about we do this? You give me that stone and I'll leave you alone?" The bird
      looks at you expectantly. "Why?" you say. "What's the value in this stone? Can it grant me a wish?" At this, the bird
      produces a wheezy sound, almost like it was laughing. "Nope. It can't do anything too terribly special. It's just a 
      key to get me back to my nest. And it lets me communicate with humans." You think a bit. "Oh, well are <Text style={{fontStyle: 'italic'}}>you</Text> magical?
       Can you tell me my future or something?" At this the bird gets quiet. "No. I can't do that. But I am magical. I'm what's known 
       as a wisdom bird. I can read your emotions and give you a piece of advice that you sorely need." At this you get quiet. You 
       go to sit at the edge of your bed and plop the stone in front of the bird. "Okay, then. One piece of advice, please."{'\n'}
      </Animatable.Text>

          <Animatable.Text animation="fadeInUpBig" style={material.subheadingWhite}>
     {'\t'} The bird sits down. "You... feel restless. You think there's something that you're supposed to be doing, or that you should know
     what you want to do with your life already." It looks at you with more understanding than you had ever seen anyone look at you. 
     "You are but a young human. Enjoy your life. Keep the friends you have now, for they will help you reach new heights. 
     Be curious. Try new things. It's okay to be unhappy sometimes. That is the nature of life. Regardless of whether
     or not you have more money than the people around or travel to the most exotic places or live in the nicest house. 
     Choose happiness. Because it's just that. A choice." 
     And with that, the bird picked up it's stone and flew out the window. {'\n'}
  
      {'\t'} And so as time passed by, you saw the wisdom of the bird's advice. You did your best to follow it,
      and after a while, everything seemed to fall into place. Even though {res[1]} didn't know you existed all throughout middle school, 
      you happened to go to college together, dated, and even got married after graduation. (Really, it was just a confidence problem that
      had led to {res[1]} not noticing you all this time. Even the bird's advice couldn't have been able to fix it that quickly.)
      After all the hard work you put in, juggling school and working as a waiter to help pay the bills, you 
      finally were able to work in your dream job as a {res[4]} and you could proudly say you drove an even nicer car than the {res[5]} that
       had transported you during school. You were able to save enough money (${res[6]} to be precise), get a pet {res[7]}, and 
      had {res[3]} beautiful kids. You still had bad days just like anyone else, but you faced them with the certainty 
      that the bad days wouldn't last forever.
   </Animatable.Text>
    
     <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={resultStyle.resultButton}>
   <Button color="#1698bc" title="Go back Home/ Replay?"  onPress={() =>
       navigate('Home')  }/>
   </Animatable.View>

</ScrollView>
 <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-5432616899214952/8522331318"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> 

</View>
    );
  }
  }
}
