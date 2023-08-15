import React from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import {MainScreen} from "./main";
import {FormulasScreen} from "./formulas";
import {CreateScreen} from "./create";
import {ChatScreen} from "./chat";
import {SettingsScreen} from "./settings"

const Navigation = createDrawerNavigator({
    Main: {
      screen: MainScreen
    },
    Formulas: {
      screen: FormulasScreen
    },
    CreateFormula:{
      screen: CreateScreen
    },
    Chat:{
      screen: ChatScreen
    },
    Settings:{
      screen: SettingsScreen
    },
  },
  {
    initialRouteName: "Main"
  });

export default createAppContainer(Navigation);
