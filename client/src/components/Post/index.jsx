import * as C from './styles';
import code from '../../assets/code.jpg'

function Post(props){
  return(
    <C.Post>
      <img src={props.image} alt="" />
      <C.Description>
        <p>{props.description}</p>
      </C.Description>
    </C.Post>
  );
}

export default Post;