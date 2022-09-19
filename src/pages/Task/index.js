import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { onSnapshot, doc, deleteDoc, collection } from "firebase/firestore";

import database from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

const Task = ({ navigation }) => {

    const [task, setTask] = useState([]);

    const deleteTask = async (id) => {
        await deleteDoc(doc(database, "Tasks", id));
    }

    useEffect(() => {
        const querySnapshot = onSnapshot(collection(database, "Tasks"), (doc) => {
            list = [];
            doc.forEach((doc) => {
                list.push({...doc.data(), id: doc.id });
            });
            setTask(list);
        });
    }, []);


    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={ (item) => {
                    return(
                        <View style={styles.Tasks}>
                            <TouchableOpacity 
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.item.id);
                                }}
                            >
                                <FontAwesome
                                    name="star"
                                    size={23}
                                    color="F92E6A"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.DescriptionTask}
                                onPress={() => {
                                    navigation.navigate("Details", {
                                        id: item.item.id,
                                        description: item.item.description
                                    })
                                }}
                            >
                                {item.item.description}
                            </Text>
                        </View>
                    )
                }}
            />

            <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Task;