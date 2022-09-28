import { Container, Content } from './styles'

interface headerProps {
  onOpenNewTransactionModal: any
}
function Header({ onOpenNewTransactionModal }: headerProps) {
  return (
    <Container>
      <Content>
        <h2>ControleFinanceiro</h2>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}

export default Header
