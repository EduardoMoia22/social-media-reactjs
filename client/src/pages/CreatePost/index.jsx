import { useState } from 'react';
import * as C from './styles';
import axios from 'axios';


function CreatePost(){
  const [image, SetImage] = useState();
  const [description, SetDescription] = useState();

  const handleButton = () => {
    axios.post("http://localhost:3333/createPost", {
      image: image,
      description: description
    }).then((response) => {
      console.log(response);
    })

    console.log(image)
    console.log(description)
  }

  return(
    <C.InputArea>
      <C.Title />
      <C.Image src={image}/>
      <C.InputImage type="text" onChange={(e) => SetImage(e.target.value)}/>
      <C.InputDescription type="text" onChange={(e) => SetDescription(e.target.value)}/>
      <button onClick={handleButton}>Postar</button>
    </C.InputArea>
  );
}

export default CreatePost;