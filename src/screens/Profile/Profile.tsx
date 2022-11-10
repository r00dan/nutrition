import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Layout } from '@components/Layout/Layout';

interface IProfileProps {

}

export function Profile(props: IProfileProps) {
  return (
    <Layout>
      <Text style={style.text}>Profile screen 🤡</Text>
    </Layout>
  )
}

const style = StyleSheet.create({
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
  }
});
