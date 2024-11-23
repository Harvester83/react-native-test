import {StyleSheet, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

interface Data {
  title: string;
  body: string;
}

export default function HomeScreen() {
  const [data, setData] = useState<Data | null>(null);

  // Асинхронная функция, которая выполняет запрос к API
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Использование useEffect для загрузки данных при монтировании компонента
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Index Screen</Text>
      {data ? (
        <Text>{data.title}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
