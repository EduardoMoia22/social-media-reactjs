import * as C from './styles'
import { BiSearchAlt, BiMenu } from "react-icons/bi";

function Header(){
  return(
    <C.Header>
      <C.Nav>
        <C.Link href="#">logo</C.Link>

        <C.InputArea>
          <C.Input type="search" placeholder="pesquisar"/>
          
          <C.SearchButton>
            <BiSearchAlt size={28} color={`#EFEFF1`}/>
          </C.SearchButton>
        </C.InputArea>

        <C.MenuArea>
          <BiMenu size={30} color={`#EFEFF1`}/>
        </C.MenuArea>

        <C.List>
          <C.ListItem>
            <C.ItemLink href="#">feed</C.ItemLink>
          </C.ListItem>
          <C.ListItem>
            <C.ItemLink href="#">feed</C.ItemLink>
          </C.ListItem>
          <C.ListItem>
            <C.ItemLink href="#">feed</C.ItemLink>
          </C.ListItem>
        </C.List>
      </C.Nav>
    </C.Header>
  );
}

export default Header;