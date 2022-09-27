import { Container } from './styles'
import arrowdown from '../../assets/down-arrow.png'
import arrowup from '../../assets/up-arrow.png'
import money from '../../assets/money.png'
export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={arrowup} alt="" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={arrowdown} alt="" />
        </header>
        <strong> - R$ 300,00</strong>
      </div>

      <div className="highbackground">
        <header>
          <p>Total</p>
          <img src={money} alt="" />
        </header>
        <strong>R$ 1800,00</strong>
      </div>
    </Container>
  )
}
