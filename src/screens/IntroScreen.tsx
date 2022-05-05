import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/HomeStack';
import { StyleSheet,Text,View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from './LoginScreen';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamsList>

const slides = [
  {
    key: 1,
    title: 'SG Hawcenter',
    image: require('../assets/images/image6.gif'),
    text: 'Discover Singapore Best Local hawker cuisine within your fingertips'
  },
  {
    key: 2,
    title: 'Ultimate Food Guide To Fill Your Tummy Right',
    image: require('../assets/images/image7.gif'),
    text: 'Unsure the food will satisfy your hunger? Check out the reliable reviews that posted by millions of readers'
  },
  {
    key: 3,
    title: 'Search . Discover . Post',
    image: require('../assets/images/image8.gif'),
    text: 'Search and view the favourite food of all times. Have some thoughts after your munch? Post it!'
  }
];

const IntroScreen: React.FC<Props> = ( props: Props) => {

  const [showScreen, setShowScreen] = useState(false);

  const onDone = () => {
    setShowScreen(true);
  }

  const onSkip = () => {
    setShowScreen(true);
  }

  const handleScreen = () => {
    setShowScreen(false);
  }

  const renderNextButton = () => {
    return (
      <View style={{backgroundColor: "coral", padding: 10}}>
        <Text style={{textAlign: "center", fontSize: 18, color: "white", fontWeight: "bold"}}>Next</Text>
      </View>
    )
  }

  const renderDoneButton = () => {
    return (
      <View style={{backgroundColor: "coral", padding: 10}}>
        <Text style={{textAlign: "center", fontSize: 18, color: "white", fontWeight: "bold"}}>Done</Text>
      </View>
    )
  }

  const renderItem = ({ item }:{item: any}) => {
    return (
      <View style={{
        flex:1,
        justifyContent: "space-between",
        paddingBottom: 100,
      }}>
         <Image style={styles.introImage} source={item.image} />
         <View style={styles.introTextWrapper}>
          <Text style={styles.introTitle}>{item.title}</Text>
          <Text style={styles.introText}>{item.text}</Text>
         </View>
      </View>
    )
  }

  return (
    <>
      {showScreen?
        <View style={styles.container}>
          <LoginScreen {...props}/>
        </View>
        : <AppIntroSlider
          data={slides}
          renderItem={renderItem}
          onDone={onDone}
          onSkip={onSkip}
          showDoneButton={true}
          bottomButton
          activeDotStyle={{backgroundColor: "coral"}}
          renderNextButton={renderNextButton}
          renderDoneButton={renderDoneButton}
          />}
    </>
  )
   
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  introTitle: {
    justifyContent: "center",
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    top: -315,
    padding: 18
  },
  introImage: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    top: -150
  },
  introText: {
    padding: 24,
    top: -350,
    fontSize: 25,
    fontWeight: "100"
  },
  introTextWrapper: {
    marginTop: -30,
    marginLeft: 20
  }
});

export default IntroScreen;