import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)),
  url("https://kartinkin.net/uploads/posts/2021-07/thumbs/1626299919_38-kartinkin-com-p-mebelnii-fon-krasivo-39.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 5px;
  border: 2px solid lightgray;
  border-radius: 5px;
  font-size: 20px;
`

const Agreement = styled.span`
  font-size: 14px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  background-color: #005154;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Создать учётную запись</Title>
                <Form>
                    <Input type="text" placeholder="Имя"/>
                    <Input type="text" placeholder="Фамилия"/>
                    <Input type="text" placeholder="Имя пользователя"/>
                    <Input type="email" placeholder="Электронная почта"/>
                    <Input type="password" placeholder="Пароль"/>
                    <Input type="password" placeholder="Повторите пароль"/>
                    <Agreement>Создавая учётную запись, вы даёте согласие на обработку своих персональных данных в
                        соответствии с <b>ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</b></Agreement>
                    <Button>Создать</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register