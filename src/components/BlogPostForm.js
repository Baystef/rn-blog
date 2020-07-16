import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Context } from '../context/BlogContext'



const BlogPostForm = ({ onSubmit, initialValues }) => {
  // const blogPost = state.find(blogPost => blogPost.id === id);

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={styles.button}
        title="Save Blog Post"
        onPress={() => {
          onSubmit(title, content, () => {})
        }}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    paddingLeft: 5,
  },
  button: {
    marginLeft: 10,
    marginRight: 10
  }
})

export default BlogPostForm;
