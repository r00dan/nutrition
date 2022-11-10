import React from 'react'
import { Text, StyleSheet } from 'react-native';

import { Layout } from '@components/Layout/Layout';

interface IAuthProps {

}

export function Auth(props: IAuthProps) {
  return (
    <Layout>
      <Text style={style.text}>Auth screen 🤡</Text>
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