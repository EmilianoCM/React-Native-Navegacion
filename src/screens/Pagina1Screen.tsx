import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { colores, style } from '../themes/appTheme';

import { DrawerScreenProps } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/Ionicons';



interface Props extends DrawerScreenProps<any, any> { };

const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft:() => (
    <TouchableOpacity
       style={{
        marginLeft:10
      }}
      onPress={ () => navigation.toggleDrawer()}
    >
      <Icon
        name='menu-outline'
        color={colores.primary}
        size={35}
      />

    </TouchableOpacity>

        )
    })
  }, []);
  


  return (
    <View style={style.globalMargin}>
      <Text style={style.title}>Pagina 1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      /> 

      <Text>Navegar con Argumentos</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
        style={{
          ...style.botonGrande,
          backgroundColor:'#5856D6'
          }}
         onPress={() => navigation.navigate('PersonaScreen', {
          id: 1,
          nombre: 'Nahuel'
        })}>
         <Icon
            name="body-outline"
            color="white"
            size={35}
          />
          <Text style={style.botonGrandeTexto}>Nahuel</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style={{
          ...style.botonGrande,
          backgroundColor:'#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Emiliano'
          })}>
          <Icon
            name='woman-outline'
            color="white"
            size={35}
          />
          <Text style={style.botonGrandeTexto}>Emiliano</Text>
        </TouchableOpacity>

      </View>

    
    </View>
  );
};

export default Pagina1Screen;
