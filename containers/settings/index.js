import React from 'react';
import {Button, TextInput, View, StyleSheet,Input,Text,TouchableOpacity} from "react-native";
import { styles } from "./styles.js";

export const MainPageView = ({ scope}) => {
    return (
      <View>
        <Button
          onPress={() => scope.props.navigation.navigate('Main')}
          title="Calculator"
        />
        <Text style={styles.base_text}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => scope.setState({author: text})}
          value={scope.state.author}
        />
          <TouchableOpacity onPress={() => {scope._storeData()}} style={styles.button}><Text style={styles.button.text}>Сохранить</Text></TouchableOpacity>
      </View>
    )
};