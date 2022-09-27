import React from 'react'
import { Container } from './styled'

function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Value</td>
            <td>Category</td>
            <td>Data</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dev website</td>
            <td className="withdraw">R$ 12.000</td>
            <td>Devellopper</td>
            <td>20/02/2022</td>
          </tr>

          <tr>
            <td>Dev website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Devellopper</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable
