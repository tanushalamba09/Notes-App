import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const NewNotes = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    // Load existing note from local storage on component mount
    loadNote();
  }, []);

  const loadNote = async () => {
    try {
      const savedNote = await AsyncStorage.getItem('note');
      if (savedNote !== null) {
        const { title, note } = JSON.parse(savedNote);
        setTitle(title);
        setNote(note);
      }
    } catch (error) {
      console.log('Error loading note:', error);
    }
  };

  const saveNote = async () => {
    try {
      const data = { title, note };
      await AsyncStorage.setItem('note', JSON.stringify(data));
      console.log('Note saved successfully!');
    } catch (error) {
      console.log('Error saving note:', error);
    }
  };

  const handleGoBack = () => {
    // Save note before navigating back
    saveNote();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> New </Text>
      <View style={styles.titleContainer}>
        <TextInput
          style={styles.titleInput}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter a title..."
        />
      </View>
      <TextInput
        style={styles.noteInput}
        multiline
        value={note}
        onChangeText={setNote}
        placeholder="Enter your notes..."
      />
      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save</Text>
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
  titleContainer: {
    width: '80%',
    marginBottom: 20,
  },
  titleInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  noteInput: {
    height: 200,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default NewNotes;
