import 'react-native-gesture-handler';

import React, { Children } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navegacion/StackNavigator';
import { MenuLateralBasico } from './src/navegacion/MenuLateralBasico';
import { MenuLateral } from './src/navegacion/MenuLateral';
import { Tabs } from './src/navegacion/Tabs';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {
  return(
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
        <MenuLateral/>
        {/* <Tabs/> */}

      </AppState>
      
    
    </NavigationContainer>
  )
};

const AppState = ({children}: any)=>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
