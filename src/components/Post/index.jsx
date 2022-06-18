import * as C from './styles';
import code from '../../assets/code.jpg'

function Post(){
  return(
    <C.Post>
      <img src={code} alt="" />
      <C.Description>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quia laboriosam eaque rem fugit vero accusamus ipsam laudantium odit nihil, blanditiis obcaecati consequatur illum quasi et ipsum, atque eum incidunt.</p>
      </C.Description>
    </C.Post>
  );
}

export default Post;