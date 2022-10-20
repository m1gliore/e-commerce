import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  ${mobile({padding: "0"})}
`

const Title = styled.h1`
  text-transform: uppercase;
  margin: 5px;
  text-align: center;
`

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            <Title>Популярные новинки</Title>
            <ProductContainer>
                {popularProducts.map(item => (
                    <Product item={item} key={item.id}/>
                ))}
            </ProductContainer>
        </Container>
    )
}

export default Products