import React, { useContext } from 'react';
import { Text, View, Button} from 'react-native';
import { style } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';


export const ContactsScreen = () => {
  
  const { signIn, logOut, authState } = useContext(AuthContext);
  const { isLoggedIn } = authState

  return (
      <View style={style.globalMargin}>
          <Text style={style.title}>ContactsScreen</Text>
          {
            // !isLoggedIn && <Button title="SignIn" onPress={signIn}/> 
            !isLoggedIn ? <Button title="SignIn" onPress={signIn}/> : <Button color='red' title="LogOut" onPress={logOut} /> 
          }
          
      </View>
  );
};
