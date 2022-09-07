import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import database from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

const Task = ({ navigation }) => {

    const [task, setTask] = useState([]);

    useEffect(() => {
        // database.collection("Tasks").onSnapshot((query) =>{
        //     const list = [];
        //     query.forEach((doc) => {
        //         list.push({...doc.data(), id: doc.id })
        //     });
        //     setTask(list);
        // })
    }, [])

    return(
        <View style={styles.container}>
            <FlatList

            />

            <TouchableOpacity 
                style={styles.buttonNewTask}
                // onPress={() => navigation.navigate("New Task")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Task;