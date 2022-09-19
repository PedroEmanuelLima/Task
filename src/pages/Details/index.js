import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { doc, updateDoc } from "firebase/firestore";

import database from "../../config/firebaseconfig";
import styles from "./style";

const Details = ({ navigation, route }) => {

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    const editTask = async (id) => {
        await updateDoc(doc(database, "Tasks", id), {
            description: descriptionEdit
          });
        navigation.navigate("Task")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Ex: estudar javascript"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {editTask(idTask)}}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details;