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
  width: 20%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Button = styled.button`
  width: 80%;
  border: none;
  padding: 10px;
  background-color: #005154;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
  
  &:hover {
    text-decoration: underline;
  }
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Войти в учётную запись</Title>
                <Form>
                    <Input type="name" placeholder="Имя пользователя"/>
                    <Input type="password" placeholder="Пароль"/>
                    <Button>Войти</Button>
                    <Link href="#">Забыли свой пароль?</Link>
                    <Link href="#">Создать новую учётную запись</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login