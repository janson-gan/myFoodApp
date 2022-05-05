import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/HomeStack';
import { View, Text, StyleSheet } from 'react-native';



type Props = NativeStackScreenProps<RootStackParamsList>

const ReviewDetails: React.FC<Props> = ({ navigation, route }) => {

    return (
        <View>
            <Text>Review Details Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ReviewDetails;