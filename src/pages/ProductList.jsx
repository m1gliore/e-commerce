import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  ${mobile({flexDirection: "column"})}
`

const FilterText = styled.span`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`

const Select = styled.select`
  width: 100%;
  padding: 10px;
`

const Option = styled.option`
  font-size: 16px;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Мебель</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Фильтр товаров:</FilterText>
                    <Select>
                        <Option disabled selected>Цвет</Option>
                        <Option>Белый</Option>
                        <Option>Чёрный</Option>
                        <Option>Красный</Option>
                        <Option>Синий</Option>
                        <Option>Жёлтый</Option>
                        <Option>Зелёный</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Материал</Option>
                        <Option>ЛДСП</Option>
                        <Option>Массив дерева</Option>
                        <Option>МДФ</Option>
                        <Option>Металл</Option>
                        <Option>ПВХ</Option>
                        <Option>Стекло</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Сортировка товаров:</FilterText>
                    <Select>
                        <Option selected>По наличию</Option>
                        <Option>По цене</Option>
                        <Option>По новизне</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList