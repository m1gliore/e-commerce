import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div``

const CartContainer = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
`

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TopButton = styled.button`
  width: 12%;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${props => props.filled && "none"};
  background-color: ${props => props.filled ? "black" : "transparent"};
  color: ${props => props.filled && "white"};
  border-radius: 5px;
  ${mobile({width: "40%", height: "7vh"})}
`

const TopTextContainer = styled.div`
  display: flex;
  gap: 20px;
  ${mobile({display: "none"})}
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-size: 20px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column", gap: "20px"})}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span`
  font-size: 18px;
`

const ProductId = styled.span`
  font-size: 18px;
`

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const ProductMaterial = styled.span`
  font-size: 18px;
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${mobile({gap: "15px"})}
`

const Amount = styled.span`
  font-size: 24px;
`

const Price = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1; 
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const SummaryTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 200;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.large && "500"};
  font-size: ${props => props.large && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <CartContainer>
                <Title>Ваша корзина</Title>
                <Top>
                    <TopButton filled>Оплатить</TopButton>
                    <TopTextContainer>
                        <TopText>Корзина (2)</TopText>
                        <TopText>Список желаемого (0)</TopText>
                    </TopTextContainer>
                    <TopButton>Продолжить покупки</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src="https://shkaf-graf.by/wp-content/uploads/2021/07/matovye-shkafy-kupe-statya-1.jpg"/>
                                <Details>
                                    <ProductName><b>Товар:</b> Шкаф-купе</ProductName>
                                    <ProductId><b>ИД:</b> 89067823448</ProductId>
                                    <ProductColor color="lightgray"/>
                                    <ProductMaterial><b>Материал:</b> Массив дерева</ProductMaterial>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <AmountContainer>
                                    <Add/>
                                    <Amount>2</Amount>
                                    <Remove/>
                                </AmountContainer>
                                <Price>$ 60</Price>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src="https://www.stolplit.ru/upload/resize_cache/iblock/a7c/pj3j9ml2fptejvfni638bc101t5ubkf3/1500_700_0/00000285209_detail.jpg"/>
                                <Details>
                                    <ProductName><b>Товар:</b> Комод Бруклин</ProductName>
                                    <ProductId><b>ИД:</b> 78955489349</ProductId>
                                    <ProductColor color="white"/>
                                    <ProductMaterial><b>Материал:</b> МДФ</ProductMaterial>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <AmountContainer>
                                    <Add/>
                                    <Amount>1</Amount>
                                    <Remove/>
                                </AmountContainer>
                                <Price>$ 30</Price>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Общая сумма</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Стоимость товаров</SummaryItemText>
                            <SummaryItemPrice>$ 150</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Доставка</SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Скидка</SummaryItemText>
                            <SummaryItemPrice>$ -15</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem large>
                            <SummaryItemText>Конечная сумма</SummaryItemText>
                            <SummaryItemPrice>$ 140</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Оплатить</SummaryButton>
                    </Summary>
                </Bottom>
            </CartContainer>
            <Footer/>
        </Container>
)
}

export default Cart