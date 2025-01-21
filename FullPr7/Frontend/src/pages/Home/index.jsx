import React from 'react'
import Hero from "../../components/Hero"
import Product from '../../components/Product'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name='description' content='Home' />
      </Helmet>
      <main>
        <Hero />
        <Product />
      </main>
    </>
  )
}

export default Home
