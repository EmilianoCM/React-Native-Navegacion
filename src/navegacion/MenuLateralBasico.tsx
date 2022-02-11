import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScren } from '../screens/SettingScren';
import { useWindowDimensions } from 'react-native';



export type RootDrawerParams = {
    StackNavigator:undefined;
    SettingScren:undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false  // Oculta la hamburguesa
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingScren"options={{title:'Setting'}}  component={SettingScren} />
    </Drawer.Navigator>
  );
}