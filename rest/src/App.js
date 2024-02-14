// import React from "react";

// class connectionExample extends React.Component{
//   componentDidMount(){
//     const apiUrl = 'http://127.0.0.1:8000/api/';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
//   render() {
//     return <div>example Connection</div>
//   }
//  }
//  export default connectionExample;
import React,{useEffect, useState} from "react";
import './App.css';
import Posts from './components/Posts';
import PostLoadingComponet from './components/PostLoading';

function App() {
  const PostLoading = PostLoadingComponet(Posts);
  const [appState, setAppState] = useState({
    loading:false,
    posts:null,
  });

  useEffect(() => {
    setAppState({loading:true});
    const apiUrl = 'http://127.0.0.1:8000/api/';
    fetch(apiUrl)
      .then((data) =>  data.json())
      .then((posts) => {
        setAppState({loading: false, posts:posts});
      });
  }, [setAppState]);

  return (
    <div className="App">
      <h1>Latest Posts</h1>
        
        <PostLoading isLoading={appState.loading} posts={appState.posts}/>

    </div>
  );
}

export default App;
