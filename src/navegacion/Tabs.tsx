import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/appTheme';

import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTap';

export const Tabs = () =>{
  return Platform.OS === "ios"
          ?<TabsIOS/>
          :<TabsAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor:colores.primary
      }}
      screenOptions={({route})=>({
        
        tabBarIcon: ({color, focused}) => {
          let iconName:string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'partly-sunny-outline';  
            break;
              case 'Tab2Screen':
              iconName = 'stats-chart-outline';  
            break;
              case 'StackNavigator':
              iconName = 'trail-sign-outline';  
            break;
          }
          
          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
      screenOptions={({route})=>({
        tabBarActiveTintColor:colores.primary,
        tabBarStyle:{
          borderTopColor:colores.primary,
          borderTopWidth:0,
          elevation:0
        },
        tabBarLabelStyle:{
          fontSize:15
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName:string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';  
            break;
              case 'Tab2Screen':
              iconName = 'T2';  
            break;
              case 'StackNavigator':
              iconName = 'ST';  
            break;
          }
          
          return <Text style={{color}}>{iconName}</Text>
        }
      })}

    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}