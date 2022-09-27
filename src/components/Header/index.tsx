import { Container, Content } from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <h2>ControleFinanceiro</h2>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header
