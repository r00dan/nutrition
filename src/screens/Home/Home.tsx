import React from 'react'
import { Text, StyleSheet } from 'react-native';

import { Layout } from '@components/Layout/Layout';

interface IHomeProps {

}

export function Home(props: IHomeProps) {
  return (
    <Layout>
      <Text style={style.text}>Home screen 🤡</Text>
    </Layout>
  );
}

const style = StyleSheet.create({
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
  }
});