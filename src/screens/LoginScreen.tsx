import { Formik } from 'formik';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/HomeStack';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, TextInput } from 'react-native';
import Home from './Home';


type Props = NativeStackScreenProps<RootStackParamsList>;

const user = {
    username: "Janson Gan",
    password: "12345"
}

const LoginScreen: React.FC<Props> = ({ navigation, route }) => {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [homepage, setHomepage] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    // const handleSubmit = () => {
    //     if (username === "" || password === "") {
    //         Alert.alert("Input field cannot be empty")
    //     } else if (username !== user.username || password !== user.password) {
    //         Alert.alert("Invalid username or password")
    //     } else {
    //         Alert.alert(`Welcome ${username}`);
    //         setHomepage(true);
    //         // props.navigation.navigate("Home");
    //     }
    // }

    return (
      <>

      {homepage
      ?  (<View>
            <Home navigation={navigation} route={route}/>
        </View>)
        : ( <View style={styles.container}>
            <Text style={styles.heading}>Log In</Text>
            <Image
                style={styles.image} 
                source={require("../assets/images/image5.png")}/>
            <Formik 
                initialValues={{username: "", password: ""}}
                onSubmit={(values, actions, ) => {
                    if (values.username === "" || values.password === "") {
                        Alert.alert("Input field must not be empty.")
                    } else if (values.username !== user.username || values.password !== user.password) {
                        Alert.alert("Invalid username or password.")
                    } else {
                        Alert.alert(`Welcome ${values.username}`);
                        // setHomepage(true);
                        navigation.navigate("Home");
                    }
                    actions.resetForm();
                
                }}
            >

                {(props) => (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={props.handleChange("username")}
                            value={props.values.username}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={props.handleChange("password")}
                            value={props.values.password}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />

                        <TouchableOpacity
                            style={styles.submitBtn} 
                            onPress={props.handleSubmit}
                             >
                            <Text style={styles.submitText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )
}
            </Formik>

            {/* <TouchableOpacity onPress={pressHandler}>
                <Text style={{ textAlign: "center"}}>Back to intro screen</Text>
            </TouchableOpacity> */}

        </View>)
}
    
       

        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: "center",
       width: "100%",
       padding: 15
    },
    input: {
       borderWidth: 1,
       borderColor: "#ddd",
       padding: 10,
       fontSize: 18,
       borderRadius: 6,
       marginTop: 10
    },
    heading: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Arial",
        color: "#4f4f4f"
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: 350,
    },
    inputContainer: {
        
    },
    submitBtn: {
        backgroundColor: "coral",
        marginTop: 10,
        paddingVertical: 8
    },
    submitText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        borderRadius: 6
    }
})

export default LoginScreen;