import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  
  max-width: 80%;
  margin: auto;
  height: 70px;
`;

export const Nav = styled.nav`
  background-color: #101018;
  border-radius: 20px;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;

  @media(max-width: 500px) {
    padding: 0 30px;
  }

  @media(max-width: 350px) {
    padding: 0 20px;
  }
`;

export const Link = styled.a`
  color: #EFEFF1;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  @media(max-width: 900px) {
    flex: 4;
  }

  @media(max-width: 640px) {
    flex: 10;
  }

  @media(max-width: 1120px) {
    flex: 10;
  }
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  list-style: none;

  @media(max-width: 640px) {
    display: none;
  }
`;

export const ListItem = styled.li`

`;

export const ItemLink = styled.a`
  text-decoration: none;

  font-size: 14px;
  color: #EFEFF1;
  font-weight: 600;

  text-transform: uppercase;
`;

export const InputArea = styled.div`
  flex: 2;
  
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-left: 100px;

  @media(max-width: 900px) {
    display: none;
  }
  
  @media(max-width: 1120px) {
    display: none;
  }
  
`;

export const Input = styled.input`
  width: 90%;

  background-color: #22222e;
  outline: none;
  border: 0;
  height: 30px;
  border-radius: 20px;
  padding: 20px 20px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #EFEFF1;
    text-transform: capitalize;
  }
  :-ms-input-placeholder {
    color: #EFEFF1;
    text-transform: capitalize;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder { /* Firefox 18- */
    color: transparent;  
  }
  :focus::-moz-placeholder {  /* Firefox 19+ */
    color: transparent;  
  }
  :focus:-ms-input-placeholder {  
    color: transparent;  
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const MenuArea = styled.div`
    flex: 1;

    display: none;

    @media(max-width: 640px) {
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;

