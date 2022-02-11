import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScren } from '../screens/SettingScren';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { colores, style } from '../themes/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import { Tab1Screen } from '../screens/Tab1Screen';



export type RootDrawerParams = {
    StackNavigator:undefined;
    Tabs:undefined;
    SettingScren:undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

// const Stack = createStackNavigator();
// const SettingStackScreen = () => {
//   return(
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="SettingScreen"
//         component={SettingScren}
//       />
//     </Stack.Navigator>
//   )
// }


export const MenuLateral = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      
      screenOptions={{
        
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false  // Oculta la hamburguesa
      }}
      drawerContent={(props)=>< MenuContenido {... props} />}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScren"  component={SettingScren} />
    </Drawer.Navigator>
  );
}


const MenuContenido = ({navigation}:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Contenido del Avatar */}
      <View style={style.avatarContainer}>
        <Image
          source={{
            uri:'https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif'
          }}
          style={style.avatar}
        />
      </View>

      {/* Menu Opciones */}
      <View style={style.menuContainer}>
        {/* <TouchableOpacity 
          style={style.menuBotonItem}
          onPress={()=> navigation.navigate('StackNavigator')}
        >
          <Text style={style.menuTextoItem}>Navegacion</Text>
        </TouchableOpacity> */}
        <TouchableOpacity 
          style={style.menuBotonItem}
          onPress={()=> navigation.navigate('SettingScren')}
        >
          <View style={style.fila}>
            <Icon name='cog-outline' size={23} color={colores.primary} />
            <Text style={style.menuTextoItem}> Setting</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={style.menuBotonItem}
          onPress={()=> navigation.navigate('Tabs')}
        
        >
          <View style={style.fila}>
            <Icon name='cart-outline' size={23} color={colores.primary} />
            <Text style={style.menuTextoItem}> Tabs</Text>
          </View>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}