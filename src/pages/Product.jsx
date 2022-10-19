import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";

const Container = styled.div``

const ProductContainer = styled.div`
  padding: 50px;
  display: flex;
  gap: 50px;
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Description = styled.p`
  font-size: 20px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 60%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`

const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`

const FilterMaterialSelect = styled.select`
  padding: 5px;
`

const FilterMaterialOption = styled.option`
  font-size: 16px;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 5px;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #005154;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  text-transform: uppercase;
  padding: 15px;
  border: 2px solid #005154;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://shkaf-graf.by/wp-content/uploads/2021/07/matovye-shkafy-kupe-statya-1.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Шкаф-купе</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tempus ante. Morbi
                        euismod ligula quis dignissim aliquam. Etiam dignissim neque non elit lobortis malesuada. Proin
                        non ligula a est sagittis placerat hendrerit ac nisi. Etiam feugiat felis sed sapien
                        pellentesque, eget tincidunt nulla egestas. Aliquam sed mattis purus, non malesuada libero.
                        Aliquam venenatis tortor tortor, sit amet faucibus risus placerat eu. Ut posuere malesuada nisi
                        in varius. Curabitur lectus magna, porta in faucibus eu, sollicitudin scelerisque
                        ex.</Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Цвет</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="lightgray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Материал</FilterTitle>
                            <FilterMaterialSelect>
                                <FilterMaterialOption disabled selected>Материал</FilterMaterialOption>
                                <FilterMaterialOption>ЛДСП</FilterMaterialOption>
                                <FilterMaterialOption>Массив дерева</FilterMaterialOption>
                                <FilterMaterialOption>МДФ</FilterMaterialOption>
                                <FilterMaterialOption>Металл</FilterMaterialOption>
                                <FilterMaterialOption>ПВХ</FilterMaterialOption>
                                <FilterMaterialOption>Стекло</FilterMaterialOption>
                            </FilterMaterialSelect>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Добавить в корзину</Button>
                    </AddContainer>
                </InfoContainer>
            </ProductContainer>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product