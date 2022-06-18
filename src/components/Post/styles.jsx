import styled from "styled-components";

export const Post = styled.div`
  max-width: 100%;
  background-color: white;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  gap: 20px;

  min-height: 300px;

  overflow: hidden;

  img{
    flex: 2;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Description = styled.div`
  flex: 3;
  padding: 0 10px;

  p{
    text-overflow: ellipsis;

  }
`;