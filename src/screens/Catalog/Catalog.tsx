import React from 'react'
import { Text, StyleSheet } from 'react-native';

import { Layout } from '@components/Layout/Layout';

interface ICatalogProps {

}

export function Catalog(props: ICatalogProps) {
  return (
    <Layout>
      <Text style={style.text}>Catalog screen 🤡</Text>
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