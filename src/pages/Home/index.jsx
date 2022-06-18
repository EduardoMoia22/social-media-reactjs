import Header from "../../components/Header";
import Post from "../../components/Post";

import * as C from './styles';

function Home(){
  return(
    <C.Container>
      <Header />

      <C.Main>
        <C.FeedContainer>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </C.FeedContainer>
        <C.SideBarContainer>

        </C.SideBarContainer>
      </C.Main>
    </C.Container>
  );
}

export default Home;