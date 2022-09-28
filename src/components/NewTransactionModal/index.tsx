import React from 'react'
import ReactModal from 'react-modal'
import { Container } from './styles'

interface NewTransationModalProps {
  isOpen: boolean
  onRequestClose?: ({}) => VoidFunction
}
function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransationModalProps) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar </button>
      </Container>
    </ReactModal>
  )
}

export default NewTransactionModal
