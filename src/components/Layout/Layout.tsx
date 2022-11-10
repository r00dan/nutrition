import React, { ReactNode } from 'react'
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface ILayoutProps {
  children: ReactNode;
}

export function Layout({
  children
}: ILayoutProps) {
  return (
    <View>
      {children}
      <StatusBar style='auto' />
    </View>
  )
}
