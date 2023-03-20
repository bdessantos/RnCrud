import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import users from "../data/users";

export default ({ route, navigation }) => {

    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View style={style.form} >
            <Text>Name</Text>
            <TextInput style={style.input} placeholder="Informe o nome" onChangeText={name => setUser({ ...user, name })} value={user.name} />

            <Text>E-mail</Text>
            <TextInput style={style.input} placeholder="Informe o email" onChangeText={email => setUser({ ...user, email })} value={user.email} />

            <Text>Url do avatar</Text>
            <TextInput style={style.input} placeholder="Informe a url do avatar" onChangeText={avatarUrl => setUser({ ...user, avatarUrl })} value={user.avatarUrl} />

            <Button title="Salvar" onPress={() => {
                navigation.goBack()
            }}/>
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})