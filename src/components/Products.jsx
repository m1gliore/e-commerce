import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
`

const Title = styled.h1`
  text-transform: uppercase;
  margin: 5px;
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