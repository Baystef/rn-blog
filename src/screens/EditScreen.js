import React, { useContext } from 'react'
import {  StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'



const EditScreen = ({ route, navigation }) => {
  const { state, editBlogPost } = useContext(Context)
  const { id } = route.params
  const blogPost = state.find(blogPost => blogPost.id === id);

  return <BlogPostForm 
  initialValues={{ title: blogPost.title, content: blogPost.content }}
  onSubmit={(title, content) => {
    editBlogPost(id, title, content, () => navigation.pop());
  }}/>
}

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

export default EditScreen;
