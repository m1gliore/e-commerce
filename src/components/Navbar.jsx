import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "10px"})}
`

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${mobile({flex: 2, justifyContent: "center", gap: "10px"})}
`

const MenuItem = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  ${mobile({fontSize: "8px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>RU</Language>
                    <SearchContainer>
                        <Input placeholder="Поиск"/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>ECOM.</Logo>
                </Center>
                <Right>
                    <MenuItem>Зарегистрироваться</MenuItem>
                    <MenuItem>Войти</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar