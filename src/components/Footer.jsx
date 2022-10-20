import styled from "styled-components";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Description = styled.p`
  letter-spacing: 0.5px;
`

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${mobile({display: "none"})}
`

const Title = styled.h3`
  font-size: 20px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Payment = styled.img`
  width: 50%;
  height: 20%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ECOM.</Logo>
                <Description>Вся приведенная на данном сайте информация, включая информацию о ценах, носит исключительно
                    рекламно-информационный характер и не является публичной офертой. Изображения товаров (размеры, цвет
                    и др.) на сайте могут отличаться от товаров в продаже.</Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Полезные ссылки</Title>
                <List>
                    <ListItem>На главную</ListItem>
                    <ListItem>Список желаемого</ListItem>
                    <ListItem>Кровати</ListItem>
                    <ListItem>Мой аккаунт</ListItem>
                    <ListItem>Гостиные</ListItem>
                    <ListItem>Условия оплаты</ListItem>
                    <ListItem>Шкафы и стеллажи</ListItem>
                    <ListItem>Условия доставки</ListItem>
                    <ListItem>Корзина</ListItem>
                    <ListItem>Гарантийные обязательства</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Контакты</Title>
                <ContactItem><Room/> 220034, г. Минск, ул. Кедышко, 10, пом. 165</ContactItem>
                <ContactItem><Phone/> +375 (29) 929-42-11</ContactItem>
                <ContactItem><MailOutline/> raintruwalker@gmail.com</ContactItem>
                <Payment src="https://salonrozetok.by/upload/medialibrary/0d1/0d14ece3dacb74af94b3ff93082b2a3e.jpg"/>
            </Right>
        </Container>
    )
}

export default Footer