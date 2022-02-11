import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { style } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{};

const Pagina3Screen = ({navigation}:Props) => {
  return (
        <View style={style.globalMargin}>
            <Text style={style.title}>Pagina 3</Text>

            <Button 
              title="Regresar"
              onPress={ () => navigation.pop()  }
            />

            <Button 
              title="Ir a la Página 1"
              onPress={ () => navigation.popToTop()  }
            />
        </View>
  );
};

export default Pagina3Screen;
