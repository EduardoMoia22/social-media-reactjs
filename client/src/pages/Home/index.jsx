import { useState, useEffect } from "react";
import axios from 'axios';

import Header from "../../components/Header";
import Post from "../../components/Post";

import * as C from './styles';
import CreatePost from "../CreatePost";

function Home(){

  const [posts, SetPosts] = useState();
  const [createPost, SetCreatePost] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3333/getPosts').then(response => SetPosts(response.data));
  });
  
  return(
    <C.Container>
      <Header />

      <C.Main>
        <C.FeedContainer>
          {
            createPost ? 
            <>
              <button onClick={() => SetCreatePost(false)}>Voltar</button>
              <CreatePost/> 
            </>
            : 
            <>
            <button onClick={() => SetCreatePost(true)}>Criar Postagem</button>
            {
              typeof posts !== "undefined" &&
              posts.map((values) => {
                return(
                  <Post key={values.id} description={values.description} image={values.image} />
                  )
                })   
            }
            </>
          }
        </C.FeedContainer>
        <C.SideBarContainer>

        </C.SideBarContainer>
      </C.Main>
    </C.Container>
  );
}

export default Home;