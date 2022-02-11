import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native';
import { colores, style } from '../themes/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {
  
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1 Screen effect');
    
  }, []);
  
  
  return (
    <View style={{...style.globalMargin, marginTop: top + 10,}}>
          <Text style={style.title}>Iconos</Text>
          <Text>
            <TouchableIcon iconName="airplane-outline"         />
            <TouchableIcon iconName="aperture-outline"         />
            <TouchableIcon iconName="car-sport-outline"        />
            <TouchableIcon iconName="beer-outline"             />
            <TouchableIcon iconName="calendar-outline"         />
            <TouchableIcon iconName="cloud-outline"            />
            <TouchableIcon iconName="ellipsis-vertical-outline"/>
          </Text>
      </View>
  );
};
