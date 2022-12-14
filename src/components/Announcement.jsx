import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: #005154;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Выгодное Предложение! Бесплатная доставка при заказе на сумму более 50 $
        </Container>
    )
}

export default Announcement