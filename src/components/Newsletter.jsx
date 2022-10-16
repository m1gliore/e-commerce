import styled from "styled-components";
import {Send} from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 70px;
`

const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`

const Input = styled.input`
  border: none;
  flex: 12;
  font-size: 16px;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: #005154;
  color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Новостная рассылка</Title>
            <Description>Получайте своевременные обновления ваших любимых продуктов</Description>
            <InputContainer>
                <Input placeholder="Ваша электронная почта"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter