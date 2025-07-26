// src/screens/CreatePostScreen.tsx

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useCreatePostMutation } from '../store/api';

const CreatePostSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  body: Yup.string().required('Body is required'),
});

const CreatePostScreen = ({ navigation }: any) => {
const [createPost, { isLoading }] = useCreatePostMutation();

const handleSubmitPost = async (values: { title: string; body: string }, resetForm: () => void) => {
  try {
    const response = await createPost(values).unwrap();
    Alert.alert('✅ Post created!', `Title: ${values.title}`);
    resetForm();
    navigation.goBack();
  } catch (error) {
    console.error('Post creation error:', error);
    Alert.alert('❌ Failed to create post');
  }
};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Create New Post</Text>

        <Formik
          initialValues={{ title: '', body: '' }}
          validationSchema={CreatePostSchema}
          onSubmit={(values, { resetForm }) => handleSubmitPost(values, resetForm)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Title"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}

              <TextInput
                style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
                placeholder="Body"
                onChangeText={handleChange('body')}
                onBlur={handleBlur('body')}
                value={values.body}
                multiline
                numberOfLines={6}
              />
              {touched.body && errors.body && <Text style={styles.error}>{errors.body}</Text>}

              <TouchableOpacity onPress={handleSubmit as any} style={styles.button}>
                <Text style={styles.buttonText}>Submit Post</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
});
