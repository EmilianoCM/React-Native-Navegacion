import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { style } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navegacion/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//     id:number;
//     nombre:string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

const PersonaScreen = ({navigation, route}:Props) => {

    // const params = route.params as RouteParams;
    const params = route.params;

    const { changeUserName } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre 
        })
    },[]);

    useEffect(() => {
        changeUserName(params.nombre);
    },[]);

      return (
        <View style={style.globalMargin}>
            <Text style={style.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
         
        </View>
      )
};

export default PersonaScreen;
