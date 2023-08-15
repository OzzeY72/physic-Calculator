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
        <Text style={styles.base_text}>Формула</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => scope.setState({formula: text})}
          value={scope.state.formula}
        />
        <Text style={styles.base_text}>Предмет</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => scope.setState({subject: text})}
          value={scope.state.subject}
        />
          <TouchableOpacity onPress={() => {scope.sendFormula()}} style={styles.button}><Text style={styles.button.text}>Загрузить</Text></TouchableOpacity>
      </View>
    )
};