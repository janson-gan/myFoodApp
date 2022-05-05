import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import IntroScreen from '../screens/IntroScreen';


export type RootStackParamsList = {
    IntroScreen: undefined,
    Home: undefined,
    LoginScreen: undefined,
    ReviewDetails: {
        key: number,
        title: string,
        review: string,
        rating: number
    }
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const HomeStack: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='IntroScreen'>

                <Stack.Screen
                    name="IntroScreen"
                    component={IntroScreen}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: "Singapore"}}
                />
       
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />

                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomeStack;