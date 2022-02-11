import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { style } from '../themes/appTheme';

const Pagina2Screen = () => {

const navigator =  useNavigation()

  useEffect(()=>{
      navigator.setOptions({
        title:'HoLA',
        headerBackTitle:'Atras'
      })
  })

  return (
        <View style={style.globalMargin}>
            <Text style={style.title}>Pagina 2</Text>

            <Button
              title="Ir a pagina 3"
              //el as never es porque estás seguro de que lo que estás enviando es del mismo tipo que necesita
              onPress={ ()=>navigator.navigate('Pagina3Screen' as never ) }
            />

        </View>
  );
};

export default Pagina2Screen;
