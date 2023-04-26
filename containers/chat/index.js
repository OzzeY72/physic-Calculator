import React from 'react';
import {Button, TextInput, View, StyleSheet,Input,Text,TouchableOpacity,FlatList,SafeAreaView,ScrollView,TouchableHighlight} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from "./styles.js";

export const MainPageView = ({ scope}) => {
    return (
      <View>
      <KeyboardAwareScrollView style={styles.key} >
          <SafeAreaView style={[styles.areaView,{height: scope.state.visibleHeight-40}]}>
            <ScrollView style={styles.flatList } ref={ref => {this.scrollView = ref}}
                        onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
                  {scope.state.data.map((item, index) => {return (
                  <View style={scope.state.editorMode ? styles.bcg  : styles.black} key={index}>
                  <TouchableHighlight onLongPress={() => {scope.enterEditor()}}  onPress={() => {scope.exitEditor()}} underlayColor="black">

                      <View style={item.author != scope.state.author ? scope.state.editorMode ? styles.view : styles.view2 : scope.state.editorMode ? styles.view2 : styles.view}>
                            <TouchableOpacity onPress={() => {scope.deleteMassage(item.massage)}} underlayColor="white" style={scope.state.editorMode ? styles.buttonDel : styles.dn}></TouchableOpacity>
                            <TouchableOpacity onPress={() => {scope.editMassage(item)}} underlayColor="white" style={scope.state.editorMode ? styles.buttonDel : styles.dn}></TouchableOpacity>
                        <View style={styles.flatList.textbox}>
                            <Text style={styles.flatList.text}> {item.massage}</Text>
                            <Text style={styles.flatList.author}> {item.author}</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                  )})}
            </ScrollView>
           </SafeAreaView>
           <View style={styles.block}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {scope.setState({massage: text})}}
              value={scope.state.massage}
              onSubmitEditing={() => {if(scope.state.text != '') scope.sendMassage()}}
              autoFocus={true}
            />
            </View>    
        </KeyboardAwareScrollView>
      </View>
    )
};