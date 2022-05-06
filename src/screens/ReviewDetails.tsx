import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/HomeStack';
import { View, Text, StyleSheet } from 'react-native';


type Props = NativeStackScreenProps<RootStackParamsList>

const ReviewDetails: React.FC<Props> = ({ route }) => {

    const { title, review, rating }: any = route.params;

    return (
        <View>
            <Text>{title}</Text>
            <Text>{review}</Text>
            <Text>{rating}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ReviewDetails;