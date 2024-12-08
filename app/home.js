import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { Link } from '@react-navigation/native';

const Home = () => {
  return (
    <View>
      <Text>Bienvenido a la página de inicio</Text>
      <Link href="/login" >
          <Text>logiiiiiin</Text>
      </Link>
    </View>
  );
};

export default Home;