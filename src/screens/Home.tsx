import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParamsList } from '../navigation/HomeStack';
import ReviewDetails from './ReviewDetails';

type Props = NativeStackScreenProps<RootStackParamsList>

const reviews = [
    {key: 1, title: "Hainanese Chicken Rice", review: "Lorel Ipsum", rating: 5},
    {key: 2, title: "Nasi Lemak", review: "Lorel Ipsum", rating: 3},
    {key: 3, title: "Hokkien Mee", review: "Lorel Ipsum", rating: 4},
    {key: 4, title: "Laksa", review: "Lorel Ipsum", rating: 4},
    {key: 5, title: "Char Kuay Teow", review: "Lorel Ipsum", rating: 3},
];

const Home: React.FC<Props> = ({ navigation }) => {


    const [review, setReview] = useState(reviews);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headertext}>SG Hawker Food Reviews</Text>
            </View>
         
           <FlatList
            data={review}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                    <Text style={styles.content}>{item.title}</Text>
                </TouchableOpacity>
            )}
           />
           <TouchableOpacity 
                style={styles.logout}
                onPress={() => navigation.navigate("LoginScreen")}
                >
               <Text style={styles.logoutText}>Logout</Text>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        
        backgroundColor: "coral",
        padding: 8,
        paddingHorizontal: 15,
        margin: 30,
       
    },
    headertext: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    },
    content: {
        fontSize: 18,
        paddingHorizontal: 18,
        margin: 5
    },
    logout: {
        backgroundColor: "orange",
        padding: 10,
        margin: 50
    },
    logoutText: {
        textAlign: "center",
        fontSize: 18,
    }
});

export default Home;