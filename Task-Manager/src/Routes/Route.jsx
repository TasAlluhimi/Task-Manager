import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import Home from '../Pages/Home'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home />}></R>
        </Routes>
    </>
  )
}

export default Route