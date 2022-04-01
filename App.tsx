import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dashboard } from './src/components';

export const App = () =>{
return(
  <>
    <StatusBar style="auto" />
    <Dashboard />
  </>
)
}

