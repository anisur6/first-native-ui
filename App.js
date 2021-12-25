import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Foods from './components/Foods/Foods';
import Home from './components/Home/Home'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false,
          }}
            />
            
        </Stack.Navigator>
            
   
    </NavigationContainer>
 
  );
}

