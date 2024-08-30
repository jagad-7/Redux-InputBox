import React from 'react';
import './App.css';
import PostList from './Components/post/PostList';
import AddPostsForm from './Components/post/AddPostForm';

function App() {
  return (
    <div className="App">
      <h1>ReactJS-Redux</h1>
      <AddPostsForm />
      <PostList />
    </div>
  );
}

export default App;
