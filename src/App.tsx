import React, { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import Header from './components/Header'
import { createServer } from 'miragejs'

import { GlobalStyle } from './styles/global'
import NewTransactionModal from './components/NewTransactionModal'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/transations', () => {
      return {
        id: 1,
        value: 12.0,
        category: 'Mercado',
        data: new Date(),
      }
    })
  },
})

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  )
  function handleOpenNewTransatcionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransatcionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} />
    </>
  )
}

export default App
