import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Container from '../Container/Container.jsx'

function SharedLayout() {
  return (
    <>
      <Header/>
      <main>
        <Container>
          <Outlet/>
        </Container>
      </main>
    </>
  )
}

export default SharedLayout