//@ts-nocheck
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewNotes from './NewNotes';

const NotesHandlerScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNewPress = () => {
    navigation.navigate('NewNotes');
  };

  const handleUpdatePress = () => {
    console.log('Update button pressed');
  };

  const handleDeletePress = () => {
    console.log('Delete button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Notes</Text>

      <TouchableOpacity style={styles.button} onPress={handleNewPress}>
        <Text style={styles.buttonText}>New</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDeletePress}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDeletePress}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 120,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default NotesHandlerScreen;
