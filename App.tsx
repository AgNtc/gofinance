import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold
} from '@expo-google-fonts/quicksand';

// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_700Bold,
// } from '@expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
// import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';

export const App = () =>{
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

return (
  <ThemeProvider theme={theme} >
    <StatusBar style="auto" /> 
    {/* <Dashboard /> */}
    <Register />
  </ThemeProvider>
);
}

