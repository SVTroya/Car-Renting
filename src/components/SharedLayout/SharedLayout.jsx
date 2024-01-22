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
          {/* <Suspense fallback={<div>Loading...</div>}>*/}
          <Outlet/>
          {/* </Suspense>*/}
        </Container>
      </main>
    </>
  )
}

export default SharedLayout