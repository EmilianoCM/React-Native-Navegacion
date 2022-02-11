import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { style, colores } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';
import  Icon  from 'react-native-vector-icons/Ionicons';

export const SettingScren = () => {
  
  const insest = useSafeAreaInsets();

  const { authState }= useContext( AuthContext );

  return (
      <View style={{
            ...style.globalMargin,
            marginTop:insest.top + 20}}>
          <Text style={style.title}>Setting Screen</Text>
          <Text>{JSON.stringify(authState, null, 4)}</Text>
          {
            authState.favoriteIcon && (
              <Icon
              name={authState.favoriteIcon}
              size={150}
              color={colores.primary}
            />
            )
          }
          
         
      </View>
  )
};

