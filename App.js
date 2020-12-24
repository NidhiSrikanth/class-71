
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from "./Screens/searchScreen";
import TransactionScreen from "./Screens/bookTransactionScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";

export default class App extends React.Component {
 render(){
   return(
     <AppContainer/>
   )
 }
}

const TabNavigator= createBottomTabNavigator({
  Transaction: {
    screen: TransactionScreen
  },
  Search: {
    screen: SearchScreen
  }
})


defaultNavigationOptions:({
navigation
})=> ({
  tabBarIcon:()=>{
    const rootName= navigation.state.rootName;
    if (rootName==="Transaction"){
      <Image style= {{width:40, height: 40}}
      source= {require("./assets/book.png")}
      />
    }
    else if (rootName=== "Search"){
      <Image style= {{width:40, height: 40}}
      source= {require("./assets/searchingbook.png")}
      /> 
    }
  }
})

const AppContainer= createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
